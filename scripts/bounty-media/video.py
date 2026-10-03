import sys,pathlib,subprocess,json,re,textwrap
sys.path.insert(0,'/Users/derekconicello/Documents/Codex/2026-10-02/referenced-chatgpt-conversation-this-is-an-4/work/media-libs')
import imageio_ffmpeg
from PIL import Image,ImageDraw,ImageFont
F=imageio_ffmpeg.get_ffmpeg_exe()
root=pathlib.Path('work/bounty-media');out=pathlib.Path('public/media/bounties')
scenes=[
('A smarter Prime trial','Prepare before Prime Day', 'An eligible Prime free trial can give you time to compare purchases before Prime Day. It does not guarantee discounts, stock, or trial eligibility.'),
('01 / Confirm the event','Use Amazon’s announced dates', 'Start with the official sale dates. Summer Prime Day and autumn Prime Big Deal Days are separate events. Do not schedule a trial around a guessed date.'),
('02 / Check your offer','Your account sets the terms', 'Read the trial length, renewal date, and price shown on your account. If the page charges you today, do not assume the offer is free.'),
('03 / Fit the window','Preparation → Sale → Review', 'Choose a start date that leaves preparation time and keeps the full sale inside your offered trial. Set a reminder several days before renewal.'),
('04 / Make a short list','Exact model. Real budget.', 'Write down the exact products you need and the most you will pay. Compare final prices, delivery, accessories, and return terms. A discount badge is not proof of value.'),
('05 / Test useful benefits','Try a normal week', 'Test delivery at your actual address and entertainment you would really use. Rentals, add-on channels, Audible, and Kindle Unlimited can involve separate charges.'),
('06 / Decide deliberately','Keep it only if it earns its cost', 'Before renewal, review actual benefits and extra spending. Check discounted Prime options if you may qualify. If you cancel, save the confirmation and verify when benefits end.'),
('Your next step','Read the full timing guide', 'Visit BestPickZone for the full Prime trial timing guide. As an Amazon Associate, BestPickZone earns from qualifying purchases and may earn bounties from eligible sign-ups through affiliate links.')]
font='/System/Library/Fonts/Supplemental/Arial.ttf';bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
def ft(n,b=False):return ImageFont.truetype(bold if b else font,n)
segments=[];cursor=0;captions=['WEBVTT',''];trans=[]
def stamp(t):
 ms=round(t*1000);return f'{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02}.{ms%1000:03}'
for i,(title,sub,voice) in enumerate(scenes):
 txt=root/f'scene-{i}.txt';txt.write_text(voice)
 subprocess.run(['say','-v','Samantha','-r','155','-f',str(txt),'-o',str(root/f'voice-{i}.aiff')],check=True)
 p=subprocess.run([F,'-i',str(root/f'voice-{i}.aiff')],capture_output=True,text=True)
 match=re.search(r'Duration: (\d+):(\d+):([\d.]+)',p.stderr);dur=int(match[1])*3600+int(match[2])*60+float(match[3])+0.6
 im=Image.new('RGB',(1280,720),'#0f172a');d=ImageDraw.Draw(im)
 d.ellipse((900,-190,1550,440),fill='#134e4a');d.text((70,50),'BESTPICKZONE  /  PRIME TRIAL TIMING',font=ft(22,True),fill='#fcd34d')
 for j,line in enumerate(textwrap.wrap(title,34)):d.text((70,140+j*62),line,font=ft(54,True),fill='white')
 d.rounded_rectangle((70,290,1210,420),radius=22,fill='#f8fafc');d.text((105,333),sub,font=ft(38,True),fill='#0f766e')
 for j,line in enumerate(textwrap.wrap(voice,76)):d.text((75,470+j*35),line,font=ft(28),fill='#e2e8f0')
 d.text((75,667),f'{i+1:02} / {len(scenes):02}     Original explainer • Synthetic narration',font=ft(19),fill='#94a3b8')
 for k in range(len(scenes)):d.rounded_rectangle((950+k*30,669,971+k*30,678),radius=3,fill='#fcd34d' if k<=i else '#475569')
 png=root/f'scene-{i}.png';im.save(png)
 target=root/f'segment-{i}.mp4'
 subprocess.run([F,'-y','-loop','1','-framerate','24','-i',str(png),'-i',str(root/f'voice-{i}.aiff'),'-t',str(dur),'-vf',f"drawbox=x=0:y=710:w=1280:h=10:color=0x0f766e:t=fill",'-c:v','libx264','-preset','fast','-crf','22','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-af','apad','-movflags','+faststart',str(target)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
 segments.append(target);captions += [str(i+1),f'{stamp(cursor)} --> {stamp(cursor+dur)}',voice,''];trans.append({'title':title,'text':voice,'start':round(cursor,2),'duration':dur});cursor+=dur
(root/'concat.txt').write_text('\n'.join("file '"+p.name+"'" for p in segments))
subprocess.run([F,'-y','-f','concat','-safe','0','-i',str(root/'concat.txt'),'-c','copy','-movflags','+faststart',str(out/'prime-day-trial.mp4')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
(out/'prime-day-trial.vtt').write_text('\n'.join(captions));(out/'prime-day-trial-transcript.txt').write_text('\n\n'.join(x['title']+'\n'+x['text'] for x in trans))
Image.open(root/'scene-0.png').save(out/'prime-day-trial-poster.png')
(root/'video.json').write_text(json.dumps({'duration':round(cursor,2),'scenes':trans},indent=2));print(json.dumps({'duration':cursor,'bytes':(out/'prime-day-trial.mp4').stat().st_size}))
