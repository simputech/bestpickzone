import type { ShopperHubContent } from '@/components/ShopperHub'

export const shopperHubContent: Record<'coffee' | 'wfh' | 'home-kitchen', ShopperHubContent> = {
  coffee: {
    path: '/coffee', name: 'Coffee', title: 'Coffee gear that fits how you brew',
    intro: 'Choose your brewing method first, then check the space and accessories it needs. Start with espresso if you want to pull shots and steam milk, or explore filter and manual brewing for your usual cup or batch. Already own a machine? Resolve fit before buying upgrades.',
    choices: [
      { need: 'I am choosing an espresso machine', check: 'Think through grinding, steaming milk, and cleaning after each use. Compare the whole routine before choosing a machine.', href: '/deals/espresso-machines', title: 'Compare espresso and milk workflows' },
      { need: 'My coffee maker must fit under cabinets', check: 'Measure the lowest cabinet edge and leave room to fill the reservoir, load the filter, and remove the carafe.', href: '/coffee/best-coffee-makers-for-low-cabinets', title: 'Find coffee makers for low cabinets' },
      { need: 'I already have a Bambino', check: 'Identify your basket and decide how you will measure and transfer the grounds before choosing a grinder.', href: '/coffee/best-espresso-grinders-for-breville-bambino', title: 'Compare grinders for the Bambino' },
      { need: 'I brew French press or cold brew', check: 'Work out the dry coffee needed for a batch, then compare grinder adjustment, loading, and cleanup.', href: '/coffee/best-burr-grinders-french-press-cold-brew', title: 'Choose a grinder for larger batches' },
    ],
    comparison: { title: 'Choose your routine before your equipment', rows: [
      { choice: 'Espresso setup', fit: 'You want espresso or milk drinks and are willing to dial in the coffee.', tradeoff: 'Include the grinder, dosing tools, milk routine, and cleanup in your plan.' },
      { choice: 'Pour-over or manual brewer', fit: 'You want to control the dose and brewing steps for each cup.', tradeoff: 'Check filter supplies, kettle needs, and how many servings you want at once.' },
      { choice: 'Batch coffee', fit: 'You make several servings together or prepare coffee ahead.', tradeoff: 'Check usable serving volume, loading access, and where the carafe or batch will be stored.' },
      { choice: 'An accessory upgrade', fit: 'Your existing setup works, but a specific step is awkward.', tradeoff: 'Name that problem first. Verify the model, basket, tray, and cup dimensions before ordering.' },
    ] },
    checklist: [
      'Write down the full machine model and version. Use its manual to check accessory fit and operating clearances.',
      'Measure the working space, not just the closed appliance: lid opening, reservoir removal, cup clearance, and cable route.',
      'Add the grinder, filters, cleaning supplies, and any missing accessories to your total budget.',
      'For used gear, ask for model-label photos, a clear condition description, included parts, and return terms.',
    ],
    related: [
      { href: '/coffee/best-low-profile-espresso-scales', title: 'Fit a scale beneath your cup', description: 'Check drip-tray support and the clearance left after adding both scale and cup.' },
      { href: '/home-kitchen', title: 'Plan the rest of your kitchen', description: 'Compare appliances and attachments against the counter and storage space you have left.' },
    ],
  },
  wfh: {
    path: '/wfh', name: 'WFH', title: 'Build your home office around the work you do',
    intro: 'Start with the part of your desk that gets in the way: a screen too close to the wall, a dock that will not run both displays, a chair that does not fit, or glare during calls. Use that constraint to choose your next purchase instead of replacing the whole setup.',
    choices: [
      { need: 'My desk is shallow or against a wall', check: 'Measure the available viewing space, rear clearance, desk edge, and cable path before choosing an arm.', href: '/wfh/best-monitor-arms-for-shallow-desks', title: 'Find monitor arms for shallow desks' },
      { need: 'I need two external monitors', check: 'Write down the laptop model, operating system, screen resolutions, ports, and charging needs.', href: '/wfh/best-usb-c-docks-for-two-monitors', title: 'Check your laptop before choosing a dock' },
      { need: 'I am replacing my office chair', check: 'Compare seat dimensions, arm adjustment, recline, and return terms. Plan how you will check the chair at your own desk.', href: '/wfh/herman-miller-aeron-vs-steelcase-gesture', title: 'Compare Aeron and Gesture chair fit' },
      { need: 'My glasses reflect my call lighting', check: 'Try moving the existing light and checking the camera preview before buying another lamp.', href: '/wfh/best-video-call-lighting-for-glasses', title: 'Plan video-call lighting around glasses' },
    ],
    comparison: { title: 'Decide what actually needs replacing', rows: [
      { choice: 'Reposition existing equipment', fit: 'The problem is clutter, a blocked view, or a light in the wrong place.', tradeoff: 'Try the new arrangement through a normal work session before buying anything.' },
      { choice: 'Add a monitor arm', fit: 'You need more control over screen placement.', tradeoff: 'Check mount compatibility, supported load, clamp space, and movement near the wall.' },
      { choice: 'Replace the desk or add a riser', fit: 'Your current surface cannot accommodate the layout or height changes you need.', tradeoff: 'Measure the whole setup, including keyboard, screens, cables, and room to move.' },
      { choice: 'Upgrade keyboard, mouse, or controls', fit: 'Typing, pointing, or switching devices is the task you want to improve.', tradeoff: 'Check operating-system support and required software as well as the physical layout.' },
    ] },
    checklist: [
      'Sketch your desk with the screens, keyboard, mouse, and laptop in use. Measure wall clearance and the usable front-to-back space.',
      'Record exact laptop and monitor models. Confirm display and charging support in the manufacturer documentation for your configuration.',
      'Check the desktop material, thickness, and mounting restrictions before attaching an arm or other clamp-mounted accessory.',
      'Read return shipping, assembly, and warranty terms for bulky furniture, especially used or refurbished listings.',
    ],
    related: [
      { href: '/home-kitchen/best-study-desk-essentials', title: 'Set up a student study desk', description: 'Plan lighting, charging, and storage for a desk that also has to hold books and notes.' },
      { href: '/deals/desktop-controllers', title: 'Compare shortcut controllers', description: 'Decide whether programmable keys or dials fit the tasks you repeat.' },
    ],
  },
  'home-kitchen': {
    path: '/home-kitchen', name: 'Home & Kitchen', title: 'Choose what earns space in your home',
    intro: 'Start with the job you need done: cooking a regular meal, finding an attachment that fits, furnishing a dorm, or making room for outdoor gatherings. Check usable space, cleaning, and storage before comparing extras. The guides below help you narrow that specific choice.',
    choices: [
      { need: 'I am choosing a countertop cooker', check: 'Decide which meals you make and whether pressure cooking, air frying, or a combination matches that routine.', href: '/home-kitchen/instant-pot-vs-ninja-foodi', title: 'Compare Instant Pot and Ninja Foodi' },
      { need: 'I need containers for my CREAMi', check: 'Find the model number on the machine before choosing containers. Do not rely on the product name or capacity alone.', href: '/home-kitchen/ninja-creami-containers-compatibility', title: 'Match CREAMi containers to your model' },
      { need: 'I want a KitchenAid pasta attachment', check: 'Choose the pasta shapes you want to make, then consider dough preparation, cleaning, and storage.', href: '/home-kitchen/kitchenaid-pasta-roller-vs-pasta-press', title: 'Compare a pasta roller with a pasta press' },
      { need: 'I am moving into a dorm', check: 'Check room rules and supplied furniture, then agree with your roommate on shared items before ordering.', href: '/home-kitchen/best-dorm-room-essentials', title: 'Plan your dorm essentials' },
    ],
    comparison: { title: 'A new appliance, an attachment, or a simpler setup?', rows: [
      { choice: 'A standalone appliance', fit: 'You have a recurring cooking task your existing equipment does not cover.', tradeoff: 'Plan the operating space, portion size, cleaning steps, and storage when it is not in use.' },
      { choice: 'An attachment or accessory', fit: 'You already own the base machine and know which task you want to add.', tradeoff: 'Match the exact model and included parts. Count the space the accessory needs too.' },
      { choice: 'Room essentials', fit: 'You are setting up a dorm, study area, or shared space.', tradeoff: 'Check measurements, house rules, and what is already supplied before buying duplicates.' },
      { choice: 'Outdoor equipment', fit: 'You have a suitable place to cook, dine, or gather outside.', tradeoff: 'Confirm permitted use and required clearances in the manual, then plan weather protection and storage.' },
    ] },
    checklist: [
      'Measure where the item will work and where it will live afterward. Include lids, doors, handles, cords, and removable parts.',
      'Match the exact model number when buying containers, attachments, and replacement parts; check the manufacturer compatibility list.',
      'Read the cleaning instructions before ordering. Decide where parts will be washed, dried, and stored.',
      'Compare the complete purchase: included accessories, consumables, delivery, and return costs. Check current seller terms before paying.',
    ],
    related: [
      { href: '/coffee', title: 'Build a coffee setup that fits', description: 'Compare brewers, grinders, and accessories around your cups, cabinet height, and routine.' },
      { href: '/wfh', title: 'Make room for work at home', description: 'Resolve screen placement, desk space, and laptop compatibility before adding office gear.' },
    ],
  },
}
