import type { AmazonProductRequest } from './amazon-product-match'

export type ArticleProductPick = AmazonProductRequest & { label: string; note: string }
export type ArticleBookPick = { title: string; author: string; asin?: string }
export type ArticleCommerce = { batch: number; partnerTag?: string; products?: ArticleProductPick[]; books?: ArticleBookPick[] }

// Explicit article opt-ins. Adding a card is not a substantive editorial refresh;
// dates and sitemaps remain unchanged unless a separate reviewed edit warrants it.
export const articleCommerce: Record<string, ArticleCommerce> = {
  "/books/best-ya-thrillers": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "A Good Girl’s Guide to Murder", "author": "Holly Jackson"}, {"title": "One of Us Is Lying", "author": "Karen M. McManus"}]},
  "/books/best-ya-romance-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "To All the Boys I’ve Loved Before", "author": "Jenny Han"}, {"title": "The Fault in Our Stars", "author": "John Green"}]},
  "/books/best-ya-fantasy-series": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "The Hunger Games", "author": "Suzanne Collins"}, {"title": "Harry Potter and the Sorcerer’s Stone", "author": "J. K. Rowling"}]},
  "/books/best-ya-coming-of-age-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "The Outsiders", "author": "S. E. Hinton"}, {"title": "The Perks of Being a Wallflower", "author": "Stephen Chbosky"}]},
  "/books/best-ww2-books-for-beginners": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "The Diary of a Young Girl", "author": "Anne Frank"}, {"title": "Unbroken", "author": "Laura Hillenbrand"}]},
  "/books/best-ww2-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "All the Light We Cannot See", "author": "Anthony Doerr"}, {"title": "The Nightingale", "author": "Kristin Hannah"}]},
  "/books/best-war-novels": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "All Quiet on the Western Front", "author": "Erich Maria Remarque"}, {"title": "The Things They Carried", "author": "Tim O’Brien"}]},
  "/books/best-travel-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "Wild", "author": "Cheryl Strayed"}, {"title": "Into the Wild", "author": "Jon Krakauer"}]},
  "/books/best-toni-morrison-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "The Bluest Eye", "author": "Toni Morrison"}, {"title": "Beloved", "author": "Toni Morrison"}]},
  "/books/best-stem-books-for-kids": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "Ada Twist, Scientist", "author": "Andrea Beaty"}, {"title": "Rosie Revere, Engineer", "author": "Andrea Beaty"}]},
  "/books/best-spy-thrillers": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "The Spy Who Came in from the Cold", "author": "John le Carré"}, {"title": "Tinker Tailor Soldier Spy", "author": "John le Carré"}]},
  "/books/best-sports-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "The Boys in the Boat", "author": "Daniel James Brown"}, {"title": "Moneyball", "author": "Michael Lewis"}]},
  "/books/best-short-story-collections": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "Interpreter of Maladies", "author": "Jhumpa Lahiri"}, {"title": "What We Talk About When We Talk About Love", "author": "Raymond Carver"}]},
  "/books/best-self-help-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "Atomic Habits", "author": "James Clear"}, {"title": "Man’s Search for Meaning", "author": "Viktor E. Frankl"}]},
  "/books/best-science-fiction-books": {"batch": 13, "partnerTag": "althcu-20", "books": [{"title": "Dune", "author": "Frank Herbert"}, {"title": "Project Hail Mary", "author": "Andy Weir"}]},
  "/books/best-science-books-for-non-scientists": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "The Gene", "author": "Siddhartha Mukherjee"}, {"title": "Astrophysics for People in a Hurry", "author": "Neil deGrasse Tyson"}]},
  "/books/best-romantic-comedy-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "People We Meet on Vacation", "author": "Emily Henry"}, {"title": "The Unhoneymooners", "author": "Christina Lauren"}]},
  "/books/best-romantasy-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "A Court of Thorns and Roses", "author": "Sarah J Maas"}, {"title": "Fourth Wing", "author": "Rebecca Yarros"}]},
  "/books/best-psychological-thrillers": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Gone Girl", "author": "Gillian Flynn"}, {"title": "The Silent Patient", "author": "Alex Michaelides"}]},
  "/books/best-political-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "How Democracies Die", "author": "Steven Levitsky and Daniel Ziblatt"}, {"title": "The Origins of Totalitarianism", "author": "Hannah Arendt"}]},
  "/books/best-picture-books-for-toddlers": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "The Very Hungry Caterpillar", "author": "Eric Carle"}, {"title": "Goodnight Moon", "author": "Margaret Wise Brown"}]},
  "/books/best-philosophy-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Meditations", "author": "Marcus Aurelius"}, {"title": "The Republic", "author": "Plato"}]},
  "/books/best-personal-finance-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "The Psychology of Money", "author": "Morgan Housel"}, {"title": "I Will Teach You to Be Rich", "author": "Ramit Sethi"}]},
  "/books/best-one-sitting-reads": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "The Silent Patient", "author": "Alex Michaelides"}, {"title": "The Maid", "author": "Nita Prose"}]},
  "/books/best-nora-roberts-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "The Witness", "author": "Nora Roberts"}, {"title": "Vision in White", "author": "Nora Roberts"}]},
  "/books/best-neil-gaiman-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Neverwhere", "author": "Neil Gaiman"}, {"title": "Good Omens", "author": "Terry Pratchett and Neil Gaiman"}]},
  "/books/best-mystery-series": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Still Life", "author": "Louise Penny"}, {"title": "The Thursday Murder Club", "author": "Richard Osman"}]},
  "/books/best-mindfulness-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "10% Happier", "author": "Dan Harris"}, {"title": "Mindfulness in Plain English", "author": "Bhante Gunaratana"}]},
  "/books/best-middle-grade-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Holes", "author": "Louis Sachar"}, {"title": "Wonder", "author": "R J Palacio"}]},
  "/books/best-malcolm-gladwell-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Outliers", "author": "Malcolm Gladwell"}, {"title": "What the Dog Saw", "author": "Malcolm Gladwell"}]},
  "/books/best-magical-realism-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez"}, {"title": "Like Water for Chocolate", "author": "Laura Esquivel"}]},
  "/books/best-literary-fiction": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Normal People", "author": "Sally Rooney"}, {"title": "The Remains of the Day", "author": "Kazuo Ishiguro"}]},
  "/books/best-leadership-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "Leaders Eat Last", "author": "Simon Sinek"}, {"title": "Turn the Ship Around!", "author": "L David Marquet"}]},
  "/books/best-kids-book-series": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "The Lightning Thief", "author": "Rick Riordan"}, {"title": "Diary of a Wimpy Kid", "author": "Jeff Kinney"}]},
  "/books/best-john-grisham-books": {"batch": 12, "partnerTag": "althcu-20", "books": [{"title": "The Firm", "author": "John Grisham"}, {"title": "The Rainmaker", "author": "John Grisham"}]},
  "/books/best-jk-rowling-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Harry Potter and the Sorcerer’s Stone", "author": "J. K. Rowling"}, {"title": "The Ickabog", "author": "J K Rowling"}]},
  "/books/best-james-patterson-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Along Came a Spider", "author": "James Patterson"}, {"title": "1st to Die", "author": "James Patterson"}]},
  "/books/best-james-clear-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Atomic Habits", "author": "James Clear"}, {"title": "The Atomic Habits Workbook", "author": "James Clear"}]},
  "/books/best-inspirational-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Man’s Search for Meaning", "author": "Viktor E. Frankl"}, {"title": "Maybe You Should Talk to Someone", "author": "Lori Gottlieb"}]},
  "/books/best-horror-novels": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "The Haunting of Hill House", "author": "Shirley Jackson"}, {"title": "Bird Box", "author": "Josh Malerman"}]},
  "/books/best-history-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "The Warmth of Other Suns", "author": "Isabel Wilkerson"}, {"title": "The Guns of August", "author": "Barbara W Tuchman"}]},
  "/books/best-historical-fiction": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Wolf Hall", "author": "Hilary Mantel"}, {"title": "Pachinko", "author": "Min Jin Lee"}]},
  "/books/best-haruki-murakami-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Norwegian Wood", "author": "Haruki Murakami"}, {"title": "Kafka on the Shore", "author": "Haruki Murakami"}]},
  "/books/best-gothic-novels": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Rebecca", "author": "Daphne du Maurier"}, {"title": "Mexican Gothic", "author": "Silvia Moreno Garcia"}]},
  "/books/best-george-orwell-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Animal Farm", "author": "George Orwell"}, {"title": "Homage to Catalonia", "author": "George Orwell"}]},
  "/books/best-feel-good-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Remarkably Bright Creatures", "author": "Shelby Van Pelt"}, {"title": "The House in the Cerulean Sea", "author": "TJ Klune"}]},
  "/books/best-fantasy-series-for-adults": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Mistborn The Final Empire", "author": "Brandon Sanderson"}, {"title": "A Game of Thrones", "author": "George R R Martin"}]},
  "/books/best-fantasy-books-for-teens": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Eragon", "author": "Christopher Paolini"}, {"title": "A Wizard of Earthsea", "author": "Ursula K Le Guin"}]},
  "/books/best-early-reader-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "I Will Take a Nap!", "author": "Mo Willems"}, {"title": "Frog and Toad Are Friends", "author": "Arnold Lobel"}]},
  "/books/best-dystopian-novels": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Nineteen Eighty-Four", "author": "George Orwell"}, {"title": "The Handmaid’s Tale", "author": "Margaret Atwood"}]},
  "/books/best-debut-novels": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "The Secret History", "author": "Donna Tartt"}, {"title": "Conversations with Friends", "author": "Sally Rooney"}]},
  "/books/best-dark-romance-novels": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Twisted Love", "author": "Ana Huang"}, {"title": "Haunting Adeline", "author": "H D Carlton"}]},
  "/books/best-dan-brown-books": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Angels and Demons", "author": "Dan Brown"}, {"title": "The Da Vinci Code", "author": "Dan Brown"}]},
  "/books/best-crime-thrillers-for-women": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "Gone Girl", "author": "Gillian Flynn"}, {"title": "Big Little Lies", "author": "Liane Moriarty"}]},
  "/books/best-crime-fiction": {"batch": 11, "partnerTag": "althcu-20", "books": [{"title": "The Big Sleep", "author": "Raymond Chandler"}, {"title": "No Country for Old Men", "author": "Cormac McCarthy"}]},
  "/books/best-cozy-mystery-books": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Still Life", "author": "Louise Penny"}, {"title": "The Thursday Murder Club", "author": "Richard Osman"}]},
  "/books/best-colleen-hoover-books": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "It Ends with Us", "author": "Colleen Hoover"}, {"title": "Verity", "author": "Colleen Hoover"}]},
  "/books/best-classic-novels": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "To Kill a Mockingbird", "author": "Harper Lee"}, {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}]},
  "/books/best-classic-childrens-books": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Charlotte’s Web", "author": "E. B. White; illustrated by Garth Williams"}, {"title": "Alice’s Adventures in Wonderland", "author": "Lewis Carroll; illustrated by John Tenniel"}]},
  "/books/best-christmas-and-holiday-books": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "A Christmas Carol", "author": "Charles Dickens"}, {"title": "The Christmas Pig", "author": "J. K. Rowling; illustrated by Jim Field"}]},
  "/books/best-business-books": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Zero to One", "author": "Peter Thiel and Blake Masters"}, {"title": "The Lean Startup", "author": "Eric Ries"}]},
  "/books/best-brene-brown-books": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Daring Greatly", "author": "Brené Brown"}, {"title": "The Gifts of Imperfection", "author": "Brené Brown"}]},
  "/books/best-books-to-read-on-the-beach": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Beach Read", "author": "Emily Henry"}, {"title": "The Summer I Turned Pretty", "author": "Jenny Han"}]},
  "/books/best-books-set-in-paris": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "A Moveable Feast", "author": "Ernest Hemingway"}, {"title": "The Paris Wife", "author": "Paula McLain"}]},
  "/books/best-books-on-stoicism": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Meditations Gregory Hays translation", "author": "Marcus Aurelius"}, {"title": "Letters from a Stoic Robin Campbell translation", "author": "Seneca"}]},
  "/books/best-books-on-relationships": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Attached", "author": "Amir Levine and Rachel S. F. Heller"}, {"title": "The 5 Love Languages", "author": "Gary Chapman"}]},
  "/books/best-books-on-psychology": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Thinking Fast and Slow", "author": "Daniel Kahneman"}, {"title": "Influence New and Expanded", "author": "Robert B. Cialdini"}]},
  "/books/best-books-on-parenting": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "How to Talk So Kids Will Listen and Listen So Kids Will Talk", "author": "Adele Faber and Elaine Mazlish"}, {"title": "The Whole-Brain Child", "author": "Daniel J. Siegel and Tina Payne Bryson"}]},
  "/books/best-books-on-habits-and-productivity": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Atomic Habits", "author": "James Clear"}, {"title": "Deep Work", "author": "Cal Newport"}]},
  "/books/best-books-on-creativity": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "On Writing", "author": "Stephen King"}, {"title": "Steal Like an Artist", "author": "Austin Kleon"}]},
  "/books/best-books-of-all-time": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "To Kill a Mockingbird", "author": "Harper Lee"}, {"title": "One Hundred Years of Solitude Gregory Rabassa translation", "author": "Gabriel García Márquez"}]},
  "/books/best-books-if-you-loved-harry-potter": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "The Lightning Thief", "author": "Rick Riordan"}, {"title": "Eragon", "author": "Christopher Paolini"}]},
  "/books/best-books-for-reluctant-readers": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Dog Man", "author": "Dav Pilkey"}, {"title": "Diary of a Wimpy Kid", "author": "Jeff Kinney"}]},
  "/books/best-books-for-new-moms": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Cribsheet", "author": "Emily Oster"}, {"title": "What to Expect When You’re Expecting", "author": "Heidi Murkoff"}]},
  "/books/best-books-for-introverts": {"batch": 10, "partnerTag": "althcu-20", "books": [{"title": "Quiet", "author": "Susan Cain"}, {"title": "Introvert Power", "author": "Laurie Helgoe"}]},
  "/books/best-books-for-high-school-students": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "The Outsiders", "author": "S. E. Hinton"}, {"title": "1984", "author": "George Orwell"}]},
  "/books/best-books-for-girls-ages-8-12": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "A Wrinkle in Time", "author": "Madeleine L’Engle"}, {"title": "Anne of Green Gables", "author": "L. M. Montgomery"}]},
  "/books/best-books-for-entrepreneurs": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Zero to One", "author": "Peter Thiel and Blake Masters"}, {"title": "The Hard Thing About Hard Things", "author": "Ben Horowitz"}]},
  "/books/best-books-for-couples": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "The Seven Principles for Making Marriage Work", "author": "John Gottman and Nan Silver"}, {"title": "Mating in Captivity", "author": "Esther Perel"}]},
  "/books/best-books-for-boys-ages-8-12": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "The Lightning Thief", "author": "Rick Riordan"}, {"title": "Diary of a Wimpy Kid", "author": "Jeff Kinney"}]},
  "/books/best-books-for-anxiety": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "The Anxiety and Worry Workbook Second Edition", "author": "David A. Clark and Aaron T. Beck"}, {"title": "The Worry Trick", "author": "David A. Carbonell"}]},
  "/books/best-books-about-space-and-astronomy": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Astrophysics for People in a Hurry", "author": "Neil deGrasse Tyson"}, {"title": "A Brief History of Time", "author": "Stephen Hawking"}]},
  "/books/best-books-about-race-and-identity": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Between the World and Me", "author": "Ta-Nehisi Coates"}, {"title": "Just Mercy", "author": "Bryan Stevenson"}]},
  "/books/best-books-about-nature-and-environment": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Braiding Sweetgrass", "author": "Robin Wall Kimmerer"}, {"title": "A Walk in the Woods", "author": "Bill Bryson"}]},
  "/books/best-books-about-money-and-wealth": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "The Psychology of Money", "author": "Morgan Housel"}, {"title": "The Millionaire Next Door", "author": "Thomas J. Stanley and William D. Danko"}]},
  "/books/best-books-about-grief": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "The Year of Magical Thinking", "author": "Joan Didion"}, {"title": "When Breath Becomes Air", "author": "Paul Kalanithi"}]},
  "/books/best-books-about-friendship": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "A Little Life", "author": "Hanya Yanagihara"}, {"title": "The Kite Runner", "author": "Khaled Hosseini"}]},
  "/books/best-books-about-food-and-cooking": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Kitchen Confidential", "author": "Anthony Bourdain"}, {"title": "Salt Fat Acid Heat", "author": "Samin Nosrat"}]},
  "/books/best-books-about-anxiety-and-mental-health": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "The Body Keeps the Score", "author": "Bessel van der Kolk"}, {"title": "Feeling Good The New Mood Therapy", "author": "David D. Burns"}]},
  "/books/best-books-about-addiction-and-recovery": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Dopesick", "author": "Beth Macy"}, {"title": "Beautiful Boy", "author": "David Sheff"}]},
  "/books/best-book-club-books": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Big Little Lies", "author": "Liane Moriarty"}, {"title": "Educated", "author": "Tara Westover"}]},
  "/books/best-biographies-and-memoirs": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Educated", "author": "Tara Westover"}, {"title": "Steve Jobs", "author": "Walter Isaacson"}]},
  "/books/best-bedtime-books-for-toddlers": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Goodnight Moon", "author": "Margaret Wise Brown and Clement Hurd"}, {"title": "Llama Llama Red Pajama", "author": "Anna Dewdney"}]},
  "/books/best-beach-reads": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Beach Read", "author": "Emily Henry"}, {"title": "The Unhoneymooners", "author": "Christina Lauren"}]},
  "/books/best-audiobooks-on-audible": {"batch": 9, "partnerTag": "althcu-20", "books": [{"title": "Born a Crime audiobook", "author": "Trevor Noah"}, {"title": "Project Hail Mary audiobook Ray Porter", "author": "Andy Weir"}]},
  "/books/best-action-adventure-books": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "Jurassic Park", "author": "Michael Crichton"}, {"title": "The Hunt for Red October", "author": "Tom Clancy"}]},
  "/books/top-fantasy-romance-novels": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "A Court of Thorns and Roses", "author": "Sarah J. Maas"}, {"title": "Fourth Wing", "author": "Rebecca Yarros"}]},
  "/books/taylor-jenkins-reid-books-in-order": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Seven Husbands of Evelyn Hugo", "author": "Taylor Jenkins Reid"}, {"title": "Atmosphere", "author": "Taylor Jenkins Reid"}]},
  "/books/self-help/best-self-help-books-2026": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Let Them Theory", "author": "Mel Robbins and Sawyer Robbins"}, {"title": "Slow Productivity", "author": "Cal Newport"}]},
  "/books/self-help/best-personal-finance-books-young-adults": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Psychology of Money", "author": "Morgan Housel"}, {"title": "I Will Teach You to Be Rich Second Edition", "author": "Ramit Sethi"}]},
  "/books/self-help/best-comptia-security-plus-books-2026": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "CompTIA Security+ Study Guide SY0-701 9th Edition", "author": "Mike Chapple and David Seidl"}, {"title": "CompTIA Security+ Practice Tests SY0-701 3rd Edition", "author": "David Seidl"}]},
  "/books/self-help/best-book-to-learn-scrum": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "Essential Scrum", "author": "Kenneth S. Rubin"}, {"title": "Fixing Your Scrum", "author": "Ryan Ripley and Todd Miller"}]},
  "/books/reader-picks/best-new-books-june-2026": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Shampoo Effect", "author": "Jenny Jackson"}, {"title": "Little Wonder", "author": "Sophie Chen Keller"}]},
  "/books/reader-picks/best-new-books-april-2026": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Last Woman of Warsaw", "author": "Judy Batalion"}, {"title": "London Falling", "author": "Patrick Radden Keefe"}]},
  "/books/reader-picks/best-fall-reads-2026": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Secret History", "author": "Donna Tartt"}, {"title": "The September House", "author": "Carissa Orlando"}]},
  "/books/reader-picks/best-books-like-da-vinci-code": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Templar Legacy", "author": "Steve Berry"}, {"title": "The Name of the Rose", "author": "Umberto Eco"}]},
  "/books/reader-picks/best-books-for-people-who-dont-like-reading": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Old Man and the Sea", "author": "Ernest Hemingway"}, {"title": "Born a Crime", "author": "Trevor Noah"}]},
  "/books/reader-picks/best-action-adventure-books-for-men": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Martian", "author": "Andy Weir"}, {"title": "Killing Floor", "author": "Lee Child"}]},
  "/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "Holes", "author": "Louis Sachar"}, {"title": "Hatchet", "author": "Gary Paulsen"}]},
  "/books/kids-and-ya/best-2026-summer-reading-for-high-school-students": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Outsiders", "author": "S. E. Hinton"}, {"title": "Fahrenheit 451", "author": "Ray Bradbury"}]},
  "/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "Are You There God? It’s Me, Margaret.", "author": "Judy Blume"}, {"title": "A Wrinkle in Time", "author": "Madeleine L’Engle"}]},
  "/books/haruki-murakami-reading-order": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "Norwegian Wood", "author": "Haruki Murakami"}, {"title": "Kafka on the Shore", "author": "Haruki Murakami"}]},
  "/books/genre-fiction/devils-guard-review": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "Devil's Guard", "author": "George R. Elford"}]},
  "/books/genre-fiction/best-wwii-novels-2026": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "The Nightingale", "author": "Kristin Hannah"}, {"title": "The Guernsey Literary and Potato Peel Pie Society", "author": "Mary Ann Shaffer and Annie Barrows"}]},
  "/books/genre-fiction/best-world-war-ii-books": {"batch": 8, "partnerTag": "althcu-20", "books": [{"title": "All the Light We Cannot See", "author": "Anthony Doerr"}, {"title": "Band of Brothers", "author": "Stephen E. Ambrose"}]},
  "/books/genre-fiction/best-spy-thriller-books": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "I Am Pilgrim", "author": "Terry Hayes"}, {"title": "The Spy Coast", "author": "Tess Gerritsen"}]},
  "/books/genre-fiction/best-military-fiction-books": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "The Things They Carried", "author": "Tim O'Brien"}, {"title": "The Yellow Birds", "author": "Kevin Powers"}]},
  "/books/genre-fiction/best-legal-thriller-books": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "The Firm", "author": "John Grisham"}, {"title": "Presumed Innocent", "author": "Scott Turow"}]},
  "/books/genre-fiction/best-history-books-for-beginners": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "SPQR", "author": "Mary Beard"}, {"title": "The Guns of August", "author": "Barbara W. Tuchman"}]},
  "/books/genre-fiction/best-cold-war-thriller-books": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "The IPCRESS File", "author": "Len Deighton"}, {"title": "The Hunt for Red October", "author": "Tom Clancy"}]},
  "/books/genre-fiction/best-civil-war-soldier-memoirs": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Company Aytch", "author": "Sam R. Watkins"}, {"title": "Hardtack and Coffee", "author": "John D. Billings"}]},
  "/books/fredrik-backman-books-ranked": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "A Man Called Ove", "author": "Fredrik Backman"}, {"title": "Beartown", "author": "Fredrik Backman"}]},
  "/books/cormac-mccarthy-where-to-start": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "No Country for Old Men", "author": "Cormac McCarthy"}, {"title": "The Road", "author": "Cormac McCarthy"}]},
  "/books/books-like-verity-psychological-thrillers": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "The Wife Between Us", "author": "Greer Hendricks and Sarah Pekkanen"}, {"title": "The Last Mrs. Parrish", "author": "Liv Constantine"}]},
  "/books/books-like-it-ends-with-us": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Reminders of Him", "author": "Colleen Hoover"}, {"title": "The Things We Leave Unfinished", "author": "Rebecca Yarros"}]},
  "/books/books-like-fourth-wing-fantasy-romance": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "The Serpent and the Wings of Night", "author": "Carissa Broadbent"}, {"title": "One Dark Window", "author": "Rachel Gillig"}]},
  "/books/books-like-dune-hard-sci-fi": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "A Memory Called Empire", "author": "Arkady Martine"}, {"title": "Children of Time", "author": "Adrian Tchaikovsky"}]},
  "/books/best-urban-fantasy-series-completed": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Fated", "author": "Benedict Jacka"}, {"title": "Darkfever", "author": "Karen Marie Moning"}]},
  "/books/best-stephen-king-books": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "The Shining", "author": "Stephen King"}, {"title": "Misery", "author": "Stephen King"}]},
  "/books/best-spy-thrillers-realistic": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Tinker Tailor Soldier Spy", "author": "John le Carré"}, {"title": "The Spy Who Came in from the Cold", "author": "John le Carré"}]},
  "/books/best-short-classic-books-for-a-flight": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}, {"title": "A Room with a View", "author": "E. M. Forster"}]},
  "/books/best-sci-fi-doorstoppers-epic-space-opera": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Dune", "author": "Frank Herbert"}, {"title": "Leviathan Wakes", "author": "James S. A. Corey"}]},
  "/books/best-psychological-thrillers-with-mind-bending-twists": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Gone Girl", "author": "Gillian Flynn"}, {"title": "The Silent Patient", "author": "Alex Michaelides"}]},
  "/books/best-historical-fiction-books-2026": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Pachinko", "author": "Min Jin Lee"}, {"title": "Wolf Hall", "author": "Hilary Mantel"}]},
  "/books/best-cyberpunk-novels-all-time": {"batch": 7, "partnerTag": "althcu-20", "books": [{"title": "Neuromancer", "author": "William Gibson"}, {"title": "Snow Crash", "author": "Neal Stephenson"}]},
  "/books/best-cozy-mystery-series-to-read": {"batch": 6, "partnerTag": "althcu-20", "books": [{"title": "Chocolate Chip Cookie Murder", "author": "Joanne Fluke"}, {"title": "The Thursday Murder Club", "author": "Richard Osman"}]},
  "/books/best-brandon-sanderson-cosmere-order": {"batch": 6, "partnerTag": "althcu-20", "books": [{"title": "Mistborn: The Final Empire", "author": "Brandon Sanderson"}, {"title": "Warbreaker", "author": "Brandon Sanderson"}]},
  "/books/authors/best-patrick-radden-keefe-books": {"batch": 6, "partnerTag": "althcu-20", "books": [{"title": "Say Nothing", "author": "Patrick Radden Keefe"}, {"title": "London Falling", "author": "Patrick Radden Keefe"}]},
  "/books/authors/best-lee-child-books": {"batch": 6, "partnerTag": "althcu-20", "books": [{"title": "Killing Floor", "author": "Lee Child"}, {"title": "Chain Reaction", "author": "Lee Child and Andrew Child"}]},
  "/books/authors/authors-like-colleen-hoover": {"batch": 6, "partnerTag": "althcu-20", "books": [{"title": "The Seven Husbands of Evelyn Hugo", "author": "Taylor Jenkins Reid"}, {"title": "Beach Read", "author": "Emily Henry"}]},
  "/books/agatha-christie-hercule-poirot-in-order": {"batch": 6, "partnerTag": "althcu-20", "books": [{"title": "The Mysterious Affair at Styles", "author": "Agatha Christie"}, {"title": "Murder on the Orient Express", "author": "Agatha Christie"}]},
  "/wfh/ultimate-kitchen-table-home-office-setup": {"batch": 6, "partnerTag": "althcu-20", "products": []},
  "/wfh/standing-desk-setup-for-dual-monitor-ultrawide-workflow": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "FlexiSpot E7 standing desk", "brand": "FlexiSpot", "query": "FlexiSpot E7 standing desk", "expectedTitle": "FlexiSpot", "requiredTitleTerms": ["E7", "desk"], "forbiddenTitleTerms": ["E7 Pro", "E7 Plus", "E7Q"], "note": "E7 model, not E7 Pro. Verify selected desktop, frame and published load guidance. Manufacturer sources checked October 28, 2026; current Amazon offer unverified.", "model": "E7"}, {"label": "Ergotron HX single-monitor arm", "brand": "Ergotron", "query": "Ergotron HX 45-475 single monitor arm", "expectedTitle": "Ergotron", "requiredTitleTerms": ["HX", "45-475"], "forbiddenTitleTerms": [], "note": "Single-monitor arm: verify load, depth, VESA and exact pivot before purchase; not the dual arm or every ultrawide. Manufacturer sources checked October 28, 2026; current Amazon offer unverified.", "model": "45-475", "allowAccessory": true}]},
  "/wfh/best-products-for-your-home-office": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Logitech MX Master 3S mouse", "brand": "Logitech", "query": "Logitech MX Master 3S mouse", "expectedTitle": "Logitech", "requiredTitleTerms": ["MX", "Master", "3S"], "forbiddenTitleTerms": [], "note": "Check Bluetooth Edition versus receiver bundles, operating-system support and package contents. Manufacturer sources checked October 28, 2026; current Amazon offer unverified."}, {"label": "Brother MFC-J1010DW printer", "brand": "Brother", "query": "Brother MFC-J1010DW printer", "expectedTitle": "Brother", "requiredTitleTerms": ["MFC-J1010DW"], "forbiddenTitleTerms": [], "note": "Automatic two-sided printing does not establish automatic two-sided scanning. Compare supplies and connection requirements. Manufacturer sources checked October 28, 2026; current Amazon offer unverified.", "model": "MFC-J1010DW"}]},
  "/wfh/best-ergonomic-chairs-for-sciatica-and-lower-back-pain": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Herman Miller Embody chair", "brand": "Herman Miller", "query": "Herman Miller Embody chair", "expectedTitle": "Herman Miller", "requiredTitleTerms": ["Embody", "chair"], "forbiddenTitleTerms": [], "note": "Compare seat depth and BackFit adjustments; no pain-relief claim. Check condition and return costs. Manufacturer sources checked October 28, 2026; current Amazon offer unverified."}, {"label": "Steelcase Leap chair", "brand": "Steelcase", "query": "Steelcase Leap office chair", "expectedTitle": "Steelcase", "requiredTitleTerms": ["Leap", "chair"], "forbiddenTitleTerms": [], "note": "Compare adjustment range and fitted arm options; used and renewed listings need separate checks. No therapeutic claim. Manufacturer sources checked October 28, 2026; current Amazon offer unverified."}]},
  "/tech/best-laptops-for-college-students": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Apple 13-inch MacBook Air M3 (2024)", "brand": "Apple", "query": "Apple MacBook Air M3 13 inch 2024 laptop", "expectedTitle": "Apple", "requiredTitleTerms": ["MacBook", "Air", "M3", "13"], "forbiddenTitleTerms": [], "note": "Compare actual memory, storage, condition and course compatibility. No universal all-day battery or four-year suitability claim. Primary sources checked October 28, 2026; see article.", "accessoryOnlyTitleTerms": ["case", "cover", "sleeve", "skin", "protector", "charger"]}, {"label": "Dell XPS 13 9340 laptop", "brand": "Dell", "query": "Dell XPS 13 9340 laptop", "expectedTitle": "Dell", "requiredTitleTerms": ["XPS", "13", "9340"], "forbiddenTitleTerms": [], "note": "9340 family only. Display, memory and storage depend on the selected configuration. Primary sources checked October 28, 2026; see article.", "accessoryOnlyTitleTerms": ["case", "cover", "sleeve", "skin", "protector", "charger"]}]},
  "/tech/best-mechanical-keyboards": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Keychron Q5 Max fully assembled keyboard", "brand": "Keychron", "query": "Keychron Q5 Max fully assembled keyboard", "expectedTitle": "Keychron", "requiredTitleTerms": ["Q5", "Max", "keyboard"], "forbiddenTitleTerms": ["barebone", "barebones"], "note": "Verify assembled configuration, switches and regional layout. No comfort or noise-performance claim. Primary sources checked October 28, 2026; see article."}, {"label": "Razer BlackWidow V4 75% keyboard", "brand": "Razer", "query": "Razer BlackWidow V4 75 keyboard", "expectedTitle": "Razer", "requiredTitleTerms": ["BlackWidow", "V4", "75"], "forbiddenTitleTerms": ["Pro", "HyperSpeed", "Low Profile"], "note": "Original wired 75% model, not the Pro. Standard Orange switches and ABS keycaps; regional bundles differ. Primary sources checked October 28, 2026; see article."}]},
  "/tech/best-budget-monitors": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "LG 27GP850-B monitor", "brand": "LG", "query": "LG 27GP850-B monitor", "expectedTitle": "LG", "requiredTitleTerms": ["27GP850-B"], "forbiddenTitleTerms": [], "note": "No USB-C charging. Input-specific refresh limits apply; compare the current total with your budget. Primary sources checked October 28, 2026; see article.", "model": "27GP850-B", "accessoryOnlyTitleTerms": ["stand", "arm", "mount", "adapter", "cable"]}, {"label": "ASUS VG249Q3A monitor", "brand": "ASUS", "query": "ASUS VG249Q3A monitor", "expectedTitle": "ASUS", "requiredTitleTerms": ["VG249Q3A"], "forbiddenTitleTerms": [], "note": "23.8-inch 1080p model with tilt-only stand. ELMB is not a verified ELMB-Sync claim. Primary sources checked October 28, 2026; see article.", "model": "VG249Q3A", "accessoryOnlyTitleTerms": ["stand", "arm", "mount", "adapter", "cable"]}]},
  "/tech/best-wireless-earbuds": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Sony WF-1000XM5 earbuds", "brand": "Sony", "query": "Sony WF-1000XM5 earbuds", "expectedTitle": "Sony", "requiredTitleTerms": ["WF-1000XM5"], "forbiddenTitleTerms": [], "note": "Complete earbuds with case, not a replacement component. Battery conditions and codec compatibility matter. Primary sources checked October 28, 2026; see article.", "accessoryOnlyTitleTerms": ["case", "tips", "ear tips", "cover", "skin", "earbud only"]}, {"label": "Soundcore Liberty 4 NC", "brand": "Soundcore", "query": "Soundcore Liberty 4 NC earbuds", "expectedTitle": "Soundcore", "requiredTitleTerms": ["Liberty", "4", "NC"], "forbiddenTitleTerms": [], "note": "LDAC and multipoint cannot be used together. Compare the battery mode you will use. Primary sources checked October 28, 2026; see article.", "accessoryOnlyTitleTerms": ["case", "tips", "ear tips", "cover", "skin"]}]},
  "/tech/airpods-pro-vs-sony-wf-1000xm5": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Apple AirPods Pro 2 USB-C package", "brand": "Apple", "query": "Apple AirPods Pro 2 USB C earbuds", "expectedTitle": "Apple", "requiredTitleTerms": ["AirPods", "Pro", "2", "USB C"], "forbiddenTitleTerms": ["Pro 3", "Lightning"], "note": "Match second generation and the USB-C charging case; later generations and case-only offers differ. Primary sources checked October 28, 2026; see article.", "accessoryOnlyTitleTerms": ["case", "tips", "ear tips", "cover", "skin", "earbud only"]}, {"label": "Sony WF-1000XM5 earbuds", "brand": "Sony", "query": "Sony WF-1000XM5 earbuds", "expectedTitle": "Sony", "requiredTitleTerms": ["WF-1000XM5"], "forbiddenTitleTerms": [], "note": "Complete earbuds with case, not a replacement component. Battery conditions and codec compatibility matter. Primary sources checked October 28, 2026; see article.", "accessoryOnlyTitleTerms": ["case", "tips", "ear tips", "cover", "skin", "earbud only"]}]},
  "/mahjong/best-mahjong-accessories": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Lsaec blue four-piece racks with pushers", "brand": "Lsaec", "query": "Lsaec blue four piece Mahjong racks pushers", "expectedTitle": "Lsaec", "requiredTitleTerms": ["racks", "pushers", "blue", "4"], "forbiddenTitleTerms": [], "note": "Paid affiliate placement: eligible Lsaec purchases may earn an extra Creator Connections commission. Listing identity checked, but usable channel dimensions and fit remain unverified. Primary sources checked October 28, 2026; see article.", "asin": "B0H767MTHH", "allowAccessory": true}]},
  "/mahjong/best-book-to-learn-mahjong": {"batch": 6, "partnerTag": "althcu-20", "books": [{"title": "A Beginner's Guide to American Mah Jongg", "author": "Elaine Sandberg"}, {"title": "The Complete Book of Mah Jongg", "author": "Amy Lo"}]},
  "/mahjong/best-travel-mahjong-sets": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "YMI Inkstone FX-AM008-A", "brand": "Yellow Mountain Imports", "query": "Yellow Mountain Imports Inkstone FX-AM008-A Mahjong", "expectedTitle": "Yellow Mountain Imports", "requiredTitleTerms": ["Inkstone", "166"], "forbiddenTitleTerms": [], "note": "Miniature kit; confirm readable tile size and packed fit. Annual card excluded. Primary sources checked October 28, 2026; see article.", "model": "FX-AM008-A"}, {"label": "YMI Classic Mini US-AF020-C", "brand": "Yellow Mountain Imports", "query": "Yellow Mountain Imports Classic Mini US-AF020-C Mahjong", "expectedTitle": "Yellow Mountain Imports", "requiredTitleTerms": ["Classic", "Mini", "166"], "forbiddenTitleTerms": [], "note": "Miniature wooden-case kit; pushers excluded. Manufacturer measurements are not our tests. Primary sources checked October 28, 2026; see article.", "model": "US-AF020-C"}]},
  "/mahjong/best-mahjong-sets-for-beginners": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Linda Li Blue Paisley MJPAIS-BLUE", "brand": "Linda Li", "query": "Linda Li MJPAIS-BLUE Blue Paisley American Mahjong", "expectedTitle": "Linda Li", "requiredTitleTerms": ["Blue", "Paisley", "166"], "forbiddenTitleTerms": [], "note": "Compare the exact bagged kit and included player stations; the annual card is a separate check. Primary sources checked October 28, 2026; see article.", "model": "MJPAIS-BLUE"}, {"label": "YMI The Classic US-AM001-G", "brand": "Yellow Mountain Imports", "query": "Yellow Mountain Imports US-AM001-G Classic American Mahjong", "expectedTitle": "Yellow Mountain Imports", "requiredTitleTerms": ["Classic", "166"], "forbiddenTitleTerms": [], "note": "Wooden-case complete kit, not tiles only. Pushers are excluded. Primary sources checked October 28, 2026; see article.", "model": "US-AM001-G"}]},
  "/mahjong/best-american-mahjong-sets-on-amazon": {"batch": 6, "partnerTag": "althcu-20", "products": [{"label": "Linda Li Blue Paisley MJPAIS-BLUE", "brand": "Linda Li", "query": "Linda Li MJPAIS-BLUE Blue Paisley American Mahjong", "expectedTitle": "Linda Li", "requiredTitleTerms": ["Blue", "Paisley", "166"], "forbiddenTitleTerms": [], "note": "Compare the exact bagged kit and included player stations; the annual card is a separate check. Primary sources checked October 28, 2026; see article.", "model": "MJPAIS-BLUE"}, {"label": "YMI The Classic US-AM001-G", "brand": "Yellow Mountain Imports", "query": "Yellow Mountain Imports US-AM001-G Classic American Mahjong", "expectedTitle": "Yellow Mountain Imports", "requiredTitleTerms": ["Classic", "166"], "forbiddenTitleTerms": [], "note": "Wooden-case complete kit, not tiles only. Pushers are excluded. Primary sources checked October 28, 2026; see article.", "model": "US-AM001-G"}]},
  "/home-kitchen/best-air-fryer-accessories": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "TempPro TP19H food thermometer", "label": "TempPro TP19H instant-read thermometer", "brand": "TempPro", "expectedTitle": "TempPro", "requiredTitleTerms": ["TP19H"], "forbiddenTitleTerms": [], "note": "Check the current TempPro name and exact TP19H revision; older ThermoPro search results may differ. Use a food thermometer according to its instructions. Manufacturer sources reviewed October 28, 2026; see article."}, {"query": "OXO 9 inch silicone head tongs", "label": "OXO 9-inch silicone-head tongs", "brand": "OXO", "expectedTitle": "OXO", "requiredTitleTerms": ["9", "silicone", "tongs"], "forbiddenTitleTerms": ["12"], "note": "Check the head material and length, then the air-fryer coating and accessory instructions. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-back-to-school-gadgets": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Texas Instruments TI 84 Plus CE graphing calculator", "label": "TI-84 Plus CE calculator", "brand": "Texas Instruments", "expectedTitle": "Texas Instruments", "requiredTitleTerms": ["TI 84 Plus CE"], "forbiddenTitleTerms": ["Python"], "note": "Standard CE candidate, not the Python edition. Confirm your exact course and examination rules before buying. Manufacturer sources reviewed October 28, 2026; see article."}, {"query": "Logitech R400 wireless presenter", "label": "Logitech R400 presenter", "brand": "Logitech", "expectedTitle": "Logitech", "requiredTitleTerms": ["R400"], "forbiddenTitleTerms": [], "note": "USB-receiver presenter with a red laser. Check USB-port access and screen type; it is not a universal LCD pointer. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-car-cleaning-products": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "BLACK DECKER CHV1410L handheld vacuum", "label": "BLACK+DECKER CHV1410L vacuum", "brand": "BLACK DECKER", "expectedTitle": "BLACK DECKER", "requiredTitleTerms": ["CHV1410L"], "forbiddenTitleTerms": [], "note": "Match the exact vacuum model. Washable components do not establish that the vacuum can collect liquids. Manufacturer sources reviewed October 28, 2026; see article."}, {"query": "Invisible Glass 92164 22 oz auto glass cleaner", "label": "Invisible Glass 92164 glass cleaner", "brand": "Invisible Glass", "expectedTitle": "Invisible Glass", "requiredTitleTerms": ["92164", "22"], "forbiddenTitleTerms": [], "note": "Check the exact cleaner, vehicle glass and aftermarket-film care instructions. No universal surface-safety claim. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-dorm-organization-products": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Sterilite 2260 41 quart storage box", "label": "Sterilite 2260 41-quart storage box", "brand": "Sterilite", "expectedTitle": "Sterilite", "requiredTitleTerms": ["2260", "41"], "forbiddenTitleTerms": [], "note": "Compare external fit and smaller usable interior. Confirm room rules and the full retrieval path, not only height. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-dorm-room-essentials": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Linenspa cotton blend sheet set Twin XL", "label": "Linenspa cotton-blend Twin XL sheet set", "brand": "Linenspa", "expectedTitle": "Linenspa", "requiredTitleTerms": ["cotton", "blend", "Twin XL"], "forbiddenTitleTerms": [], "note": "Only for a confirmed Twin XL bed. Manufacturer dimensions were not usable when reviewed; resolve exact fit before ordering. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-products-for-your-dorm-room": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Vornado PIVOT CLIP fan", "label": "Vornado PIVOT CLIP fan", "brand": "Vornado", "expectedTitle": "Vornado", "requiredTitleTerms": ["PIVOT", "CLIP"], "forbiddenTitleTerms": [], "note": "The clip version, not the desk-only PIVOT. Check campus permission, power and a suitable edge within the published 1.5-inch opening. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-halloween-candy-deals-on-amazon": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Hershey Halloween chocolate miniatures 165 pieces 51.03 oz assortment", "label": "Hershey 165-piece Halloween assortment", "brand": "Hershey", "expectedTitle": "Hershey", "requiredTitleTerms": ["165", "51.03"], "forbiddenTitleTerms": [], "note": "Match the count and weight, then read the actual delivered allergen labels. A search is not a verified current price or delivery promise. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-kids-fort-for-girls-2026": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "besrey large kids play tent star lights pink", "label": "besrey large pink play tent with star lights", "brand": "besrey", "expectedTitle": "besrey", "requiredTitleTerms": ["tent", "star", "pink"], "forbiddenTitleTerms": [], "note": "Listing identity checked October 28; dimensions conflict across sources. Confirm the supplied model, age label and instructions. Not for infant sleep. Manufacturer sources reviewed October 28, 2026; see article.", "asin": "B0FJF95P9J"}]},
  "/home-kitchen/best-kitchenaid-attachments-worth-buying": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "KitchenAid KSMPRA pasta roller cutter set", "label": "KitchenAid KSMPRA roller and cutter set", "brand": "KitchenAid", "expectedTitle": "KitchenAid", "requiredTitleTerms": ["KSMPRA", "pasta"], "forbiddenTitleTerms": [], "note": "For sheets and ribbons. Match mixer and set contents; never immerse or dishwash the metal pasta attachment. Manufacturer sources reviewed October 28, 2026; see article.", "asin": "B01DBGQR1K", "allowAccessory": true}, {"query": "KitchenAid KSMPEXTA gourmet pasta press", "label": "KitchenAid KSMPEXTA pasta press", "brand": "KitchenAid", "expectedTitle": "KitchenAid", "requiredTitleTerms": ["KSMPEXTA", "pasta", "press"], "forbiddenTitleTerms": [], "note": "For extruded shapes. Use its own recipe and cleaning instructions; a roller is a different tool. Manufacturer sources reviewed October 28, 2026; see article.", "asin": "B01ENK4UV2", "allowAccessory": true}]},
  "/home-kitchen/is-ge-opal-2-0-nugget-ice-maker-worth-it": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "GE Profile Opal XPIO13SCSS nugget ice maker side tank", "label": "GE Opal XPIO13SCSS with side tank", "brand": "GE", "expectedTitle": "GE", "requiredTitleTerms": ["XPIO13SCSS"], "forbiddenTitleTerms": [], "note": "GE marks this model discontinued. Confirm model, condition, package and service support; a search does not establish inventory. Resolve cleaning directions for the exact revision. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/ooni-vs-gozney-best-outdoor-pizza-oven": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Ooni Koda 2 14 inch gas pizza oven", "label": "Ooni Koda 2 14-inch oven", "brand": "Ooni", "expectedTitle": "Ooni", "requiredTitleTerms": ["Koda 2", "14"], "forbiddenTitleTerms": ["Pro", "Max", "12", "16"], "note": "US gas version. Koda 2 is not Koda 12; the compatible temperature hub is separate. Resolve footprint discrepancy with Ooni before planning fit. Manufacturer sources reviewed October 28, 2026; see article."}, {"query": "Gozney Arc 14 inch gas pizza oven", "label": "Gozney Arc 14-inch oven", "brand": "Gozney", "expectedTitle": "Gozney", "requiredTitleTerms": ["Arc", "14"], "forbiddenTitleTerms": ["XL", "Lite"], "note": "Standard Arc, not Arc XL or Arc Lite. Confirm fuel version and a permitted outdoor setup using the exact manual. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-pet-travel-products": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Sleepypod Clickit Sport dog harness", "label": "Sleepypod Clickit Sport harness", "brand": "Sleepypod", "expectedTitle": "Sleepypod", "requiredTitleTerms": ["Clickit", "Sport"], "forbiddenTitleTerms": ["Terrain"], "note": "Exact certified model and documented sizes only; size to the dog and follow restraint instructions. Certification cannot guarantee injury prevention. Manufacturer sources reviewed October 28, 2026; see article."}, {"query": "Sherpa Original Deluxe pet carrier", "label": "Sherpa Original Deluxe carrier", "brand": "Sherpa", "expectedTitle": "Sherpa", "requiredTitleTerms": ["Original", "Deluxe"], "forbiddenTitleTerms": [], "note": "Containment carrier, not a crash-tested vehicle restraint. Match pet measurements and the airline requirements for your itinerary. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-picnic-essentials": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "YETI Rambler 20 oz tumbler MagSlider", "label": "YETI Rambler 20-ounce MagSlider tumbler", "brand": "YETI", "expectedTitle": "YETI", "requiredTitleTerms": ["Rambler", "20", "MagSlider"], "forbiddenTitleTerms": ["30", "Travel Mug", "Stronghold"], "note": "MagSlider is not leakproof. Keep upright; compare a sealed bottle when transporting drinks inside a bag. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-productivity-products-for-students": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Time Timer MOD 60 minute visual timer", "label": "Time Timer MOD 60-minute timer", "brand": "Time Timer", "expectedTitle": "Time Timer", "requiredTitleTerms": ["MOD", "60"], "forbiddenTitleTerms": ["120"], "note": "Check the 60-minute version, battery and optional alert. A timer supports a routine; it does not promise better grades. Manufacturer sources reviewed October 28, 2026; see article."}, {"query": "Rocketbook Core Next Gen reusable notebook", "label": "Rocketbook Core Next Gen notebook", "brand": "Rocketbook", "expectedTitle": "Rocketbook", "requiredTitleTerms": ["Core", "Next Gen"], "forbiddenTitleTerms": [], "note": "Check generation, page format and app workflow. Use compatible FriXion ink and verify saved scans before erasing. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-study-desk-essentials": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Logitech MK270 wireless keyboard mouse combo", "label": "Logitech MK270 keyboard and mouse", "brand": "Logitech", "expectedTitle": "Logitech", "requiredTitleTerms": ["MK270"], "forbiddenTitleTerms": [], "note": "Uses its own USB receiver, not Bluetooth, Bolt or Unifying. Verify host USB access and keyboard layout. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-tech-for-college-students": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Samsung T7 1TB MU PC1T0T AM portable SSD gray", "model": "MU-PC1T0T/AM", "label": "Samsung T7 1TB gray portable SSD", "brand": "Samsung", "expectedTitle": "Samsung", "requiredTitleTerms": ["T7", "1TB"], "forbiddenTitleTerms": ["Shield", "Touch", "T9", "2TB", "4TB"], "note": "Standard T7, not Shield or Touch. Confirm MU-PC1T0T/AM, cable and host compatibility. A drive alone is not a verified backup. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-solar-powered-attic-fans": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "iLiving ILG8SF301A solar attic fan", "label": "iLiving ILG8SF301A solar attic fan", "brand": "iLiving", "expectedTitle": "iLiving", "requiredTitleTerms": ["ILG8SF301A"], "forbiddenTitleTerms": [], "note": "Assess attic suitability and intake first. This model includes an AC/DC adapter; do not substitute a different 301 revision or promise energy savings. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/home-kitchen/best-products-for-your-backyard": {"batch": 5, "partnerTag": "althcu-20", "products": [{"query": "Keter Westwood 150 gallon brown deck box 231666", "model": "231666", "label": "Keter Westwood 150-gallon deck box", "brand": "Keter", "expectedTitle": "Keter", "requiredTitleTerms": ["Westwood", "150"], "forbiddenTitleTerms": ["200"], "note": "Confirm brown model 231666, internal storage dimensions and assembly instructions. Weather-resistance language does not establish watertight storage. Manufacturer sources reviewed October 28, 2026; see article."}]},
  "/coffee/best-gaggia-classic-pro-upgrades": {"batch":4,"products":[{"query":"Baratza Encore ESP coffee grinder","label":"Baratza Encore ESP","note":"For simple cup-based dosing with espresso-focused adjustment. Choose ESP, not the standard Encore or ESP Pro.","asin":"B0BW272XCV","brand":"Baratza","expectedTitle":"Baratza Encore ESP","requiredTitleTerms":["Encore ESP","grinder"],"forbiddenTitleTerms":["Pro","220V","240V","220 V","240 V"],"accessoryOnlyTitleTerms":["burr","burrs","hopper","lid","dosing cup","grounds bin","gear","motor","switch"]},{"query":"TIMEMORE Black Mirror Nano coffee scale","label":"Timemore Black Mirror Nano, white","brand":"TIMEMORE","expectedTitle":"TIMEMORE Black Mirror Nano","requiredTitleTerms":["Black Mirror","Nano","scale"],"forbiddenTitleTerms":["Mini","Basic","Pro"],"note":"Exact Nano, not Mini or Basic. Check current availability, side-button clearance and seller support. Pinned white variant; do not substitute a different Nano color ASIN without verification.","asin":"B09KL96K8V","accessoryOnlyTitleTerms":["pad","pads","cover","covers","case","charging cable"]}]},
  "/coffee/what-to-buy-with-your-breville-bambino-plus": {"batch":4,"products":[{"query":"Baratza Encore ESP coffee grinder","label":"Baratza Encore ESP","note":"For simple cup-based dosing with espresso-focused adjustment. Choose ESP, not the standard Encore or ESP Pro.","asin":"B0BW272XCV","brand":"Baratza","expectedTitle":"Baratza Encore ESP","requiredTitleTerms":["Encore ESP","grinder"],"forbiddenTitleTerms":["Pro","220V","240V","220 V","240 V"],"accessoryOnlyTitleTerms":["burr","burrs","hopper","lid","dosing cup","grounds bin","gear","motor","switch"]},{"query":"TIMEMORE Black Mirror Nano coffee scale","label":"Timemore Black Mirror Nano, white","brand":"TIMEMORE","expectedTitle":"TIMEMORE Black Mirror Nano","requiredTitleTerms":["Black Mirror","Nano","scale"],"forbiddenTitleTerms":["Mini","Basic","Pro"],"note":"Exact Nano, not Mini or Basic. Check current availability, side-button clearance and seller support. Pinned white variant; do not substitute a different Nano color ASIN without verification.","asin":"B09KL96K8V","accessoryOnlyTitleTerms":["pad","pads","cover","covers","case","charging cable"]}]},
  "/coffee/complete-small-kitchen-home-coffee-bar-setup": {"batch":4,"products":[{"query":"Breville Bambino Plus Espresso Machine BES500BSS","label":"Breville Bambino Plus BES500","asin":"B07JVD78TT","brand":"Breville","expectedTitle":"Breville Bambino Plus","requiredTitleTerms":["Bambino","Plus"],"forbiddenTitleTerms":["BES450","220V","240V","220 V","240 V"],"note":"US BES500 Bambino Plus, not base Bambino BES450. Confirm electrical rating and complete package; preserve the supplied jug for the documented automatic milk workflow.","accessoryOnlyTitleTerms":["water tank","tank","portafilter","filter basket","basket","tamper","jug","pitcher","seal","gasket","drip tray","tray","cleaning disc","cleaning tablets"]},{"query":"Baratza Encore ESP coffee grinder","label":"Baratza Encore ESP","note":"For simple cup-based dosing with espresso-focused adjustment. Choose ESP, not the standard Encore or ESP Pro.","asin":"B0BW272XCV","brand":"Baratza","expectedTitle":"Baratza Encore ESP","requiredTitleTerms":["Encore ESP","grinder"],"forbiddenTitleTerms":["Pro","220V","240V","220 V","240 V"],"accessoryOnlyTitleTerms":["burr","burrs","hopper","lid","dosing cup","grounds bin","gear","motor","switch"]},{"query":"TIMEMORE Black Mirror Nano coffee scale","label":"Timemore Black Mirror Nano, white","brand":"TIMEMORE","expectedTitle":"TIMEMORE Black Mirror Nano","requiredTitleTerms":["Black Mirror","Nano","scale"],"forbiddenTitleTerms":["Mini","Basic","Pro"],"note":"Exact Nano, not Mini or Basic. Check current availability, side-button clearance and seller support. Pinned white variant; do not substitute a different Nano color ASIN without verification.","asin":"B09KL96K8V","accessoryOnlyTitleTerms":["pad","pads","cover","covers","case","charging cable"]}]},
  "/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt": {"batch":4,"products":[{"query":"NuFACE TRINITY+ Starter Kit","label":"NuFACE TRINITY+ Starter Kit","accessoryOnlyTitleTerms":["case","cases","stand","stands","charger","chargers","cable","cables","holder","cover","pouch","bag","dock","adapter","serum","gel","attachment","mask"],"brand":"NuFACE","expectedTitle":"NuFACE Trinity+ Starter Kit","requiredTitleTerms":["Trinity+","Starter Kit"],"forbiddenTitleTerms":["Complete","Mini","FIX","refill","attachment only"],"note":"TRINITY+ Starter Kit, not Classic Trinity or Complete. Check the included activator and read the exact device manual before buying."},{"query":"FOREO BEAR 2 facial toning device","label":"FOREO BEAR 2, standard facial device","brand":"FOREO","expectedTitle":"FOREO BEAR 2 device","requiredTitleTerms":["BEAR 2"],"forbiddenTitleTerms":["go","body","eyes","lips","mini","serum only","charger","case","cover"],"note":"Standard BEAR 2, not go, body or eyes & lips. Read the complete manual; first-use app registration is required. No comparative lifting result is promised.","accessoryOnlyTitleTerms":["stand","stands","charger","cable","case","cover","bag","serum","gel","attachment","mask"]}]},
  "/wfh/logitech-mx-keys-s-vs-apple-magic-keyboard": {"batch":4,"products":[{"query":"Logitech MX Keys S full size keyboard","label":"Logitech MX Keys S, full size","brand":"Logitech","expectedTitle":"Logitech MX Keys S keyboard","requiredTitleTerms":["MX Keys S"],"forbiddenTitleTerms":["Mini","Mechanical","Combo","cover","keycaps"],"note":"Full-size MX Keys S only. Confirm keyboard language, operating-system support and included connection accessories.","accessoryOnlyTitleTerms":["cover","case","keycaps","feet","skin","charging cable","receiver"]},{"query":"Apple Magic Keyboard USB C MJLX4LL A US English","label":"Apple standard compact Magic Keyboard USB-C, US English","brand":"Apple","model":"MJLX4LL/A","expectedTitle":"Apple Magic Keyboard USB C","requiredTitleTerms":["USB C"],"forbiddenTitleTerms":["Touch ID","Numeric","iPad Pro","iPad Air","Lightning","cover","case"],"note":"Current standard compact US-English keyboard, not Touch ID, Numeric Keypad or an iPad case. Verify the model and your operating-system version.","accessoryOnlyTitleTerms":["cover","case","keycaps","feet","skin","charging cable","receiver"]}]},
  "/wfh/logitech-mx-master-3s-vs-apple-magic-mouse": {"batch":4,"products":[{"query":"Logitech MX Master 3S Bluetooth mouse","label":"Logitech MX Master 3S mouse","brand":"Logitech","expectedTitle":"Logitech MX Master 3S mouse","requiredTitleTerms":["Master 3S"],"forbiddenTitleTerms":["Master 4","Master 3","Anywhere","replacement","case","cover","feet","skin"],"note":"Complete MX Master 3S. Bluetooth Edition and other packages can have different receiver contents; verify the exact package. Do not substitute another MX model.","accessoryOnlyTitleTerms":["cover","case","keycaps","feet","skin","charging cable","receiver"]},{"query":"Apple Magic Mouse USB C white MXK53AM A","label":"Apple Magic Mouse USB-C, white","brand":"Apple","model":"MXK53AM/A","expectedTitle":"Apple Magic Mouse USB C","requiredTitleTerms":["USB C"],"forbiddenTitleTerms":["Lightning","trackpad","cover","case"],"note":"White USB-C Magic Mouse, not Lightning. Confirm host compatibility; the bottom charging port prevents use while charging.","accessoryOnlyTitleTerms":["cover","case","keycaps","feet","skin","charging cable","receiver"]}]},
  "/wfh/vari-desk-converter-vs-vivo-desk-riser": {"batch":4,"products":[{"query":"Vari Varidesk Pro Plus 36 manual desk converter","label":"VariDesk Pro Plus 36 manual converter","brand":"Vari","expectedTitle":"VariDesk Pro Plus 36","requiredTitleTerms":["Pro Plus","36"],"forbiddenTitleTerms":["Electric","30","48","replacement"],"note":"Manual Pro Plus 36, not an electric or different-width model. Confirm supporting desk depth and combined converter/equipment load.","accessoryOnlyTitleTerms":["keyboard tray","spring","gas cylinder","handle","clamp"]},{"query":"VIVO DESK-V000VL 42 inch desk converter","label":"VIVO DESK-V000VL 42-inch converter","brand":"VIVO","model":"DESK-V000VL","expectedTitle":"VIVO desk converter","requiredTitleTerms":["42"],"forbiddenTitleTerms":["Electric","replacement"],"note":"Exact manual DESK-V000VL. Confirm assembled lower height with VIVO: current product-page sections disagree between 6 and 6.5 inches.","accessoryOnlyTitleTerms":["keyboard tray","spring","gas cylinder","handle","clamp"]}]},
  "/wfh/herman-miller-aeron-vs-steelcase-gesture": {"batch":4,"products":[{"query":"Herman Miller Aeron Remastered Size B chair","label":"Current-design Aeron, size B candidate","brand":"Herman Miller","expectedTitle":"Herman Miller Aeron Remastered chair","requiredTitleTerms":["Remastered","Size B"],"forbiddenTitleTerms":["Classic","stool","replacement","cover only","headrest only"],"note":"A size-B current-design candidate, not a universal fit recommendation. Verify generation, exact support/arm options, condition and seller warranty; other sizes require separate fit checks.","accessoryOnlyTitleTerms":["headrest","headrests","arm pad","arm pads","armrest","armrests","seat cover","cover","covers","casters","wheels","cylinder","lumbar support","seat pan"]},{"query":"Steelcase Gesture office chair","label":"Steelcase Gesture office chair","brand":"Steelcase","expectedTitle":"Steelcase Gesture chair","requiredTitleTerms":["Gesture","chair"],"forbiddenTitleTerms":["stool","replacement","headrest only","arm pads","seat cover"],"note":"Complete Gesture office chair. Headrest, lumbar, upholstery and other options vary; verify the selected configuration and seller terms.","accessoryOnlyTitleTerms":["headrest","headrests","arm pad","arm pads","armrest","armrests","seat cover","cover","covers","casters","wheels","cylinder","lumbar support","seat pan"]}]},
  "/wfh/purple-royal-seat-cushion-vs-cushion-lab": {"batch":4,"products":[{"query":"Purple Royal Seat Cushion","label":"Purple Royal Seat Cushion","brand":"Purple","expectedTitle":"Purple Royal Seat Cushion","requiredTitleTerms":["Royal","seat","cushion"],"forbiddenTitleTerms":["Double","Ultimate","Simply","back cushion","cover only","replacement cover"],"note":"Complete Purple-brand Royal cushion. Confirm its footprint and the chair fit; this is not a therapeutic-effectiveness claim.","accessoryOnlyTitleTerms":["cover","covers","pillowcase"]},{"query":"Cushion Lab Pressure Relief Seat Cushion","label":"Cushion Lab Pressure Relief Seat Cushion","brand":"Cushion Lab","expectedTitle":"Cushion Lab Pressure Relief Seat Cushion","requiredTitleTerms":["Pressure Relief","Seat Cushion"],"forbiddenTitleTerms":["lumbar","car seat","travel pillow","cover only","replacement cover","bundle"],"note":"Complete desk-seat cushion, not a lumbar pillow or cover. Verify selected size and dimensions; adjacent designs are not assumed equivalent.","accessoryOnlyTitleTerms":["cover","covers","pillowcase"]}]},
  "/wfh/ergotron-lx-vs-amazon-basics-monitor-arm": {"batch":4,"products":[{"query":"Ergotron LX 45-241-026 single desk monitor arm","label":"Original Ergotron LX 45-241-026 single desk kit","brand":"Ergotron","model":"45-241-026","expectedTitle":"Ergotron LX desk monitor arm","forbiddenTitleTerms":["Pro","HX","dual","wall","extension accessory","extension only"],"accessoryOnlyTitleTerms":["clamp only","replacement","grommet","clamp","mounting kit","extension","adapter","pole","tray","bracket","mounting plate"],"note":"Original polished-aluminum single desk kit, not LX Pro or an extension accessory. Confirm monitor load, mounting surface and complete kit."},{"query":"Amazon Basics B00MIBN16O Single Monitor Stand Lift Engine Arm Mount","label":"Amazon Basics original Lift Engine single arm","asin":"B00MIBN16O","brand":"Amazon Basics","expectedTitle":"Amazon Basics Single Monitor Stand Lift Engine Arm Mount","requiredTitleTerms":["single","lift engine"],"forbiddenTitleTerms":["dual","wall","pole mount"],"note":"Original B00MIBN16O only. The researched listing showed unavailable stock; check current condition, complete hardware and seller support. Other Basics arms are not equivalent.","accessoryOnlyTitleTerms":["grommet","clamp","mounting kit","extension","adapter","pole","tray","bracket","mounting plate"]}]},
  "/home-kitchen/oxo-vs-fullstar-avocado-slicer": {"batch":4,"products":[{"query":"OXO Good Grips 3 in 1 avocado slicer","label":"OXO Good Grips 3-in-1 Avocado Slicer","brand":"OXO","expectedTitle":"OXO Good Grips avocado slicer","requiredTitleTerms":["3 in 1","avocado"],"forbiddenTitleTerms":["SoftWorks","chopper","apple","mango","pack"],"note":"The complete Good Grips avocado tool. The previously named Fullstar product remains unverified and is not a purchase recommendation."}]},
  // Batch 4: exact-model drafts; publication still requires independent review.
  "/home-kitchen/best-coffee-makers-under-100": {"batch":4,"products":[{"query":"Cuisinart DCC-3200NAS coffee maker","label":"Cuisinart DCC-3200NAS","brand":"Cuisinart","model":"DCC-3200NAS","expectedTitle":"Cuisinart 14 cup coffee","requiredTitleTerms":["14"],"forbiddenTitleTerms":["DCC-3200P1","220V","240V","220 V","240 V"],"accessoryOnlyTitleTerms":["carafe","filter","filters","lid"],"note":"Exact current DCC-3200NAS complete coffee maker, not legacy DCC-3200P1. Check the total against your $100 budget; no sub-$100 offer is promised."},{"query":"Hamilton Beach FlexBrew Trio 49902 coffee maker","label":"Hamilton Beach FlexBrew Trio 49902","brand":"Hamilton Beach","model":"49902","expectedTitle":"Hamilton Beach FlexBrew Trio coffee maker","requiredTitleTerms":["Trio"],"forbiddenTitleTerms":["49904","49915","220V","240V","220 V","240 V"],"accessoryOnlyTitleTerms":["holder","carafe","filter","filters","lid"],"note":"Exact 49902 complete brewer. Different FlexBrew models and replacement carafes are not equivalent. Verify stock and total cost."}]},
  "/home-kitchen/best-robot-vacuums": {"batch":4,"products":[{"query":"iRobot Roomba j7+ j755020 self emptying robot vacuum","label":"Original iRobot Roomba j7+ with Clean Base","brand":"iRobot","model":"j755020","expectedTitle":"iRobot Roomba j7 self emptying robot vacuum","requiredTitleTerms":["self emptying"],"forbiddenTitleTerms":["Combo","j9","j5"],"accessoryOnlyTitleTerms":["bags","filter","filters","brush","brushes","battery","dock","base","bag","batteries","mop","pad","pads"],"note":"Original vacuum-only j7+ and Clean Base package. No Combo or robot-only substitution; check condition, seller and current support."},{"query":"Roborock Q5+ 2700Pa self emptying robot vacuum","label":"Original Roborock Q5+ with Auto-Empty Dock Pure","brand":"roborock","expectedTitle":"Roborock Q5 2700Pa self emptying robot vacuum","requiredTitleTerms":["2700Pa","self emptying"],"forbiddenTitleTerms":["Pro","Max","DuoRoller","Q5V"],"accessoryOnlyTitleTerms":["bags","filter","filters","brush","brushes","battery","dock","base","bag","batteries","mop","pad","pads"],"note":"Original 2,700-Pa Q5+ package. Q5 Pro+, Max+ and other variants are separate models, not substitutes."}]},
  "/home-kitchen/instant-pot-vs-ninja-foodi": {"batch":4,"products":[{"query":"Instant Pot Duo 6QT 112-0170-01 pressure cooker","label":"Instant Pot Duo 6QT, standard model","brand":"Instant Pot","model":"112-0170-01","expectedTitle":"Instant Pot Duo pressure cooker","requiredTitleTerms":["6"],"forbiddenTitleTerms":["Plus","Crisp","Pro","Mini","8 Quart","8 Qt","220V","240V","220 V","240 V"],"accessoryOnlyTitleTerms":["lid","ring","rings","seal","seals","pot only"],"note":"Standard US Duo 6QT; verify complete appliance and model. Recalled Ninja Foodi OP300-family units are not recommended or linked for purchase."}]},

  "/books/reader-picks/best-true-crime-books": {"batch": 3, "books": [{"title": "In Cold Blood", "author": "Truman Capote"}, {"title": "I'll Be Gone in the Dark", "author": "Michelle McNamara"}, {"title": "Killers of the Flower Moon", "author": "David Grann", "asin": "0307742482"}, {"title": "Say Nothing", "author": "Patrick Radden Keefe"}, {"title": "The Stranger Beside Me", "author": "Ann Rule"}, {"title": "Helter Skelter", "author": "Vincent Bugliosi"}, {"title": "The Devil in the White City", "author": "Erik Larson"}, {"title": "Lost Girls", "author": "Robert Kolker"}]},
  "/books/genre-fiction/best-historical-fiction-series-2026": {"batch": 3, "books": [{"title": "The Pillars of the Earth", "author": "Ken Follett"}, {"title": "The Last Kingdom", "author": "Bernard Cornwell"}, {"title": "Wolf Hall", "author": "Hilary Mantel"}, {"title": "The Winter King", "author": "Bernard Cornwell"}, {"title": "Fall of Giants", "author": "Ken Follett"}, {"title": "Ross Poldark", "author": "Winston Graham"}, {"title": "A Morbid Taste for Bones", "author": "Ellis Peters"}]},
  "/books/self-help/best-james-clear-books": {"batch": 3, "books": [{"title": "Atomic Habits", "author": "James Clear"}, {"title": "The Power of Habit", "author": "Charles Duhigg"}, {"title": "Tiny Habits", "author": "BJ Fogg"}, {"title": "Mindset", "author": "Carol S. Dweck"}, {"title": "Deep Work", "author": "Cal Newport"}, {"title": "Grit", "author": "Angela Duckworth"}, {"title": "Thinking, Fast and Slow", "author": "Daniel Kahneman"}, {"title": "The 7 Habits of Highly Effective People", "author": "Stephen R. Covey"}]},
  "/books/genre-fiction/best-historical-fiction-books": {"batch": 3, "books": [{"title": "All the Light We Cannot See", "author": "Anthony Doerr"}, {"title": "The Book Thief", "author": "Markus Zusak"}, {"title": "Hamnet", "author": "Maggie O'Farrell"}, {"title": "The Underground Railroad", "author": "Colson Whitehead"}, {"title": "Cold Mountain", "author": "Charles Frazier"}, {"title": "Girl with a Pearl Earring", "author": "Tracy Chevalier"}, {"title": "The Other Boleyn Girl", "author": "Philippa Gregory"}, {"title": "Beloved", "author": "Toni Morrison"}]},
  "/home-kitchen/best-air-fryers": {"batch": 3, "products": [{"query": "Cosori CP358-AF 5.8 quart air fryer", "label": "Cosori CP358-AF non-smart 5.8-quart air fryer", "brand": "Cosori", "expectedTitle": "Cosori CP358 AF air fryer", "requiredTitleTerms": ["CP358-AF"], "forbiddenTitleTerms": ["CP158", "CS158", "CP258", "CS358", "WiFi", "220V", "240V"], "note": "Exact non-smart CP358-AF only. The official store was sold out when researched; a search fallback does not verify current stock or seller."}, {"query": "Ninja AF101 4 quart air fryer", "label": "Ninja AF101 4-quart air fryer", "asin": "B07FDJMC9Q", "brand": "Ninja", "expectedTitle": "Ninja AF101 air fryer", "requiredTitleTerms": ["AF101", "4"], "forbiddenTitleTerms": ["AF100", "AF150", "AF161", "AF101C", "220V", "240V"], "note": "US AF101 only; check complete appliance, condition and seller. Other Ninja models are not substitutes."}]},
  "/books/lord-of-the-rings-vs-harry-potter": {"batch": 3, "books": [{"title": "Harry Potter and the Sorcerer's Stone", "author": "J. K. Rowling"}, {"title": "The Fellowship of the Ring", "author": "J. R. R. Tolkien"}, {"title": "The Hobbit", "author": "J. R. R. Tolkien"}]},
  "/books/hemingway-vs-fitzgerald": {"batch": 3, "books": [{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}, {"title": "The Sun Also Rises", "author": "Ernest Hemingway"}, {"title": "Tender Is the Night", "author": "F. Scott Fitzgerald"}]},
  "/books/stephen-king-vs-dean-koontz": {"batch": 3, "books": [{"title": "The Shining", "author": "Stephen King"}, {"title": "Carrie", "author": "Stephen King"}, {"title": "Watchers", "author": "Dean Koontz"}, {"title": "Intensity", "author": "Dean Koontz"}, {"title": "Odd Thomas", "author": "Dean Koontz"}]},
  "/books/agatha-christie-vs-arthur-conan-doyle": {"batch": 3, "books": [{"title": "The Mysterious Affair at Styles", "author": "Agatha Christie"}, {"title": "The Adventures of Sherlock Holmes", "author": "Arthur Conan Doyle"}, {"title": "The Hound of the Baskervilles", "author": "Arthur Conan Doyle"}, {"title": "And Then There Were None", "author": "Agatha Christie"}, {"title": "The Murder of Roger Ackroyd", "author": "Agatha Christie"}]},
  '/home-kitchen/kitchenaid-pasta-roller-vs-pasta-press': { batch: 1, products: [
    { query: 'KitchenAid KSMPRA pasta roller cutter set', label: 'KitchenAid KSMPRA roller and cutter set', asin: 'B01DBGQR1K', allowAccessory: true, requiredTitleTerms: ['KSMPRA', 'pasta'], brand: 'KitchenAid', expectedTitle: 'KitchenAid pasta', note: 'For pasta sheets, fettuccine and spaghetti. Confirm the set contents and mixer fit.' },
    { query: 'KitchenAid KSMPEXTA gourmet pasta press', label: 'KitchenAid KSMPEXTA pasta press', asin: 'B01ENK4UV2', allowAccessory: true, requiredTitleTerms: ['KSMPEXTA', 'pasta', 'press'], brand: 'KitchenAid', expectedTitle: 'KitchenAid pasta press', note: 'For extruded shapes. Use the press-specific dough recipe and allow time for cleaning.' },
  ] },
  '/home-kitchen/best-pizza-peels-ooni-koda-12': { batch: 1, products: [
    { query: 'Ooni 12 inch perforated pizza peel', label: 'Ooni 12-inch perforated peel', asin: 'B07T1JPCNK', allowAccessory: true, requiredTitleTerms: ['12', 'perforated', 'peel'], brand: 'Ooni', expectedTitle: 'Ooni 12 perforated', note: 'A launching peel. Check the 12-inch option rather than a wider blade.' },
    { query: 'Ooni 7 inch pizza turning peel', label: 'Ooni 7-inch turning peel', asin: 'B0821NDN33', allowAccessory: true, brand: 'Ooni', expectedTitle: 'Ooni turning peel', requiredTitleTerms: ['7', 'turning', 'peel'], note: 'For rotating a cooking pizza, not a substitute for a launching peel.' },
    { query: 'Ooni 12 inch bamboo pizza peel', label: 'Ooni 12-inch bamboo peel', asin: 'B07TB9LBHR', allowAccessory: true, requiredTitleTerms: ['12', 'bamboo', 'peel'], brand: 'Ooni', expectedTitle: 'Ooni 12 bamboo', note: 'For preparation and launching; keep bamboo away from the flame.' },
  ] },
  '/mahjong/best-mahjong-racks-pushers-oversized-tiles': { batch: 1, products: [
    { query: 'My Fair Mahjong 20 inch acrylic racks magnetic pushers', label: 'My Fair Mahjong 20-inch acrylic racks and pushers', brand: 'My Fair Mahjong', expectedTitle: 'My Fair Mahjong 20 acrylic racks', requiredTitleTerms: ['pushers'], note: 'Check usable rack length and tile thickness. An unverified Amazon match stays a search link.' },
    { query: 'My Fair Mahjong 20 inch wooden racks magnetic pushers', label: 'My Fair Mahjong 20-inch wooden racks and pushers', brand: 'My Fair Mahjong', expectedTitle: 'My Fair Mahjong 20 wooden racks', requiredTitleTerms: ['pushers'], note: 'Check the exposure shelf and full wall layout; generic 18-inch racks are not substitutes.' },
  ] },
  '/home-kitchen/ninja-creami-containers-compatibility': { batch: 1, products: [
    { query: 'Ninja CREAMi XSKPLID2CD replacement pints', label: 'Ninja XSKPLID2CD Original containers', asin: 'B0B7CBNNXC', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'pints'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi pints', note: 'Original container family. Match the machine model, not just the pint capacity.' },
    { query: 'Ninja CREAMi Deluxe XSKPNTLD2 replacement pints', label: 'Ninja XSKPNTLD2 Deluxe containers', asin: 'B0B9CJLVY5', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'XSKPNTLD2'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi Deluxe', note: 'Deluxe family. These are not interchangeable with Original or Swirl containers.' },
    { query: 'Ninja CREAMi Swirl XSK7PNTLD2 replacement pints', label: 'Ninja XSK7PNTLD2 Swirl containers', asin: 'B0DTJR3HTL', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'Swirl'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi Swirl', note: 'Swirl family. Confirm the nozzle and lid pieces included in the selected pack.' },
  ] },
  '/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console': { batch: 1, partnerTag: 'grandparentsgift-20', products: [
    { query: 'Elgato Stream Deck MK.2 15 keys', label: 'Elgato Stream Deck MK.2', asin: 'B09738CV2G', brand: 'Elgato', expectedTitle: 'Elgato Stream Deck MK 2', note: 'The 15-key MK.2, not the Mini, XL or dial-equipped Stream Deck +.' },
    { query: 'Logitech MX Creative Console', label: 'Logitech MX Creative Console', asin: 'B0D5FRQXWZ', allowAccessory: true, requiredTitleTerms: ['MX Creative Console'], brand: 'Logitech', expectedTitle: 'Logitech MX Creative Console', note: 'The full keypad-and-dial-console package, not the standalone MX Keypad.' },
  ] },
  '/coffee/best-espresso-grinders-gaggia-classic-pro': { batch: 1, products: [
    { query: 'Baratza Encore ESP coffee grinder', label: 'Baratza Encore ESP', asin: 'B0BW272XCV', brand: 'Baratza', expectedTitle: 'Baratza Encore ESP', forbiddenTitleTerms: ['Pro'], note: 'Choose the ESP model for the espresso-focused adjustment range, not the standard Encore.' },
    { query: '1Zpresso J-Ultra manual coffee grinder', label: '1Zpresso J-Ultra', brand: '1Zpresso', expectedTitle: '1Zpresso J Ultra', note: 'A manual option for readers comfortable grinding each espresso dose by hand.' },
    { query: 'Eureka Mignon Specialita 55mm 110V espresso grinder', label: 'Eureka Mignon Specialità', asin: 'B07GFV6HM8', brand: 'Eureka', expectedTitle: 'Eureka Mignon Specialita', forbiddenTitleTerms: ['Smart'], note: 'Confirm the US voltage and seller warranty; do not substitute an overseas electrical variant.' },
  ] },
  '/coffee/best-bottomless-portafilters-gaggia-classic-pro': { batch: 1, products: [
    { query: 'KNODOS 58mm Gaggia bottomless portafilter rosewood', label: 'KNODOS Gaggia bottomless portafilter', asin: 'B0C7CY4RRQ', allowAccessory: true, requiredTitleTerms: ['Gaggia', 'portafilter'], brand: 'KNODOS', expectedTitle: 'KNODOS Gaggia portafilter', note: 'Check the exact Gaggia variant, lug fit and basket clearance before ordering.' },
    { query: 'Normcore bottomless portafilter Gaggia 58mm removable basket', label: 'Normcore Gaggia-compatible bottomless portafilter', brand: 'Normcore', expectedTitle: 'Normcore Gaggia portafilter', forbiddenTitleTerms: ['Unibody'], note: 'Select the Gaggia-specific version. A generic 58mm diameter alone does not establish fit.' },
  ] },
  '/books/daring-greatly-vs-the-gifts-of-imperfection': { batch: 1, books: [
    { title: 'Daring Greatly', author: 'Brené Brown', asin: '1592407331' },
    { title: 'The Gifts of Imperfection', author: 'Brené Brown' },
  ] },
  '/mahjong/best-folding-tables-for-mahjong': { batch: 1, products: [
    { query: 'COSCO XL 38.5 fold in half card table 14036', label: 'COSCO XL 38.5-inch fold-in-half table', asin: 'B084QF1F6M', model: '14036BLK1E', brand: 'Cosco', expectedTitle: 'COSCO XL 38.5 fold', note: 'For more rack space. Inspect the center seam and verify the folded storage envelope.' },
    { query: 'COSCO 34 vinyl top folding table 14696', label: 'COSCO 34-inch vinyl-top table', asin: 'B00SOWJUO8', model: '14696BLK1E', brand: 'Cosco', expectedTitle: 'COSCO 34 vinyl', note: 'For a smaller playing footprint. Test the actual four-player layout inside a 34-inch square.' },
  ] },
  // Batch 2: explicit reviewed products; missing catalog identities fail closed.
  "/wfh/best-monitor-arms-for-shallow-desks": {
    "batch": 2,
    "products": [
      {
        "query": "VIVO STAND-V001 single monitor desk mount black",
        "label": "VIVO STAND-V001 single monitor arm",
        "note": "For a mostly fixed screen position. Confirm the exact pole arm, desktop construction and clamp clearance.",
        "asin": "B00B21TLQU",
        "brand": "VIVO",
        "expectedTitle": "VIVO STAND V001 monitor",
        "requiredTitleTerms": [
          "STAND-V001",
          "monitor"
        ],
        "forbiddenTitleTerms": [
          "dual",
          "STAND-V001C",
          "STAND-V001VA",
          "STAND-V001T"
        ],
        "model": "STAND-V001"
      },
      {
        "query": "Ergotron LX Pro 45-682 single monitor desk arm",
        "label": "Ergotron LX Pro 45-682 single desk arm",
        "note": "The single-arm two-piece-clamp family, not a dual, tall-pole or wall-mount kit. Check the complete folded envelope.",
        "asin": "B0DSJJMRFL",
        "brand": "Ergotron",
        "expectedTitle": "Ergotron LX Pro single monitor arm",
        "requiredTitleTerms": [
          "LX Pro",
          "single",
          "monitor arm"
        ],
        "forbiddenTitleTerms": [
          "dual",
          "stacking",
          "tall pole",
          "wall mount"
        ],
        "modelPrefix": "45-682",
        "allowAccessory": true
      }
    ]
  },
  "/coffee/best-burr-grinders-french-press-cold-brew": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Encore standard coffee grinder black",
        "label": "Baratza Encore, standard model",
        "note": "For a simple brew-grinder routine. This is not the Encore ESP; keep grounds below the bin's maximum-fill line.",
        "asin": "B007F183LK",
        "brand": "Baratza",
        "expectedTitle": "Baratza Encore coffee grinder",
        "requiredTitleTerms": [
          "Encore",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "ESP",
          "Pro"
        ],
        "model": "ENCORE"
      },
      {
        "query": "Fellow Ode Gen 2 brew grinder matte black standard burrs",
        "label": "Fellow Ode Gen 2",
        "note": "For weighed brewed-coffee batches. Not an espresso grinder; doses above its 100g capacity need multiple loads.",
        "asin": "B0BLRMCM9Y",
        "brand": "Fellow",
        "expectedTitle": "Fellow Ode Gen 2 grinder",
        "requiredTitleTerms": [
          "Ode",
          "Gen 2",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "SSP"
        ]
      }
    ]
  },
  "/coffee/best-coffee-makers-for-low-cabinets": {
    "batch": 2,
    "products": [
      {
        "query": "Hamilton Beach FrontFill 46310J coffee maker",
        "label": "Hamilton Beach FrontFill 46310J",
        "note": "For front loading beneath a cabinet. An unverified 46310J match stays a search link; do not substitute the older 46310.",
        "brand": "Hamilton Beach",
        "expectedTitle": "Hamilton Beach FrontFill",
        "requiredTitleTerms": [
          "46310J"
        ],
        "model": "46310J"
      },
      {
        "query": "Zojirushi ZUTTO EC-DAC50 coffee maker silver",
        "label": "Zojirushi ZUTTO EC-DAC50, silver",
        "note": "Silver EC-DAC50SA listing. Check the exact version and tank-removal space; five coffee-maker cups are not five large mugs.",
        "asin": "B000EPLK6O",
        "brand": "Zojirushi",
        "expectedTitle": "Zojirushi EC DAC50 Zutto",
        "requiredTitleTerms": [
          "EC-DAC50",
          "Zutto"
        ],
        "model": "EC-DAC50SA"
      }
    ]
  },
  "/coffee/best-espresso-grinders-for-breville-bambino": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Encore ESP coffee grinder",
        "label": "Baratza Encore ESP",
        "note": "For simple cup-based dosing with espresso-focused adjustment. Choose ESP, not the standard Encore or ESP Pro.",
        "asin": "B0BW272XCV",
        "brand": "Baratza",
        "expectedTitle": "Baratza Encore ESP",
        "requiredTitleTerms": [
          "Encore ESP",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "Pro"
        ]
      },
      {
        "query": "Breville Smart Grinder Pro BCG820BSS",
        "label": "Breville Smart Grinder Pro BCG820BSS",
        "note": "For timed hopper dosing with a 50–54mm cradle. The timer controls duration, not an exact grounds weight.",
        "asin": "B00OXGXW8O",
        "brand": "Breville",
        "expectedTitle": "Breville Smart Grinder Pro",
        "requiredTitleTerms": [
          "BCG820BSS",
          "Smart Grinder Pro"
        ],
        "model": "BCG820BSS"
      }
    ]
  },
  "/coffee/best-low-profile-espresso-scales": {
    "batch": 2,
    "products": [
      {
        "query": "Acaia Lunar 2021 espresso scale",
        "label": "Acaia Lunar 2021",
        "note": "For preserving vertical cup clearance. Confirm the 2021 scale, not a plate, base, carrying case or unrelated compact scale.",
        "brand": "Acaia",
        "expectedTitle": "Acaia Lunar",
        "requiredTitleTerms": [
          "2021",
          "scale"
        ],
        "forbiddenTitleTerms": [
          "Pearl",
          "weighing plate",
          "carrying case",
          "base",
          "protective film"
        ]
      },
      {
        "query": "WACACO Exagram Pro coffee scale",
        "label": "Wacaco Exagram Pro",
        "note": "For a smaller tray footprint with enough cup headroom. Its 22mm body is taller than the Lunar; do not substitute the original Exagram.",
        "asin": "B0D7378WJL",
        "brand": "WACACO",
        "expectedTitle": "WACACO Exagram Pro coffee scale",
        "requiredTitleTerms": [
          "Exagram Pro",
          "scale"
        ]
      }
    ]
  },
  "/mahjong/best-carrying-bags-for-american-mahjong-sets": {
    "batch": 2,
    "products": [
      {
        "query": "Yellow Mountain Imports Mojave soft case YM-XH012-A case only",
        "label": "YMI Mojave case-only bag",
        "note": "Case and packing pouches, not a full tile set. Match rack and tile dimensions; interior and mat fit are unverified.",
        "asin": "B00SR63J2A",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports Mojave soft case",
        "requiredTitleTerms": [
          "Mojave",
          "case only"
        ],
        "model": "YM-XH012-A"
      },
      {
        "query": "Yellow Mountain Imports Pepper soft case DX-XH001-A case only",
        "label": "YMI Pepper case-only bag",
        "note": "The case-only model, not the complete Pepper Mahjong set. No exact US ASIN verified; an unmatched result stays a search link.",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports Pepper soft case",
        "requiredTitleTerms": [
          "case only"
        ],
        "model": "DX-XH001-A"
      }
    ]
  },
  "/mahjong/best-mahjong-mats-for-small-tables": {
    "batch": 2,
    "products": [
      {
        "query": "Yellow Mountain Imports 31.1 table cover YW-TR001-A blue rubber backing",
        "label": "YMI 31.1-inch rubber-backed mat",
        "note": "Roll-up YW-TR001-A, not a fitted cover. Confirm all four corners are supported. No exact US ASIN verified.",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports 31.1 table cover",
        "requiredTitleTerms": [
          "31.1"
        ],
        "model": "YW-TR001-A"
      },
      {
        "query": "Yellow Mountain Imports blue fitted square table cover YM-TR001-B87",
        "label": "YMI blue fitted cover YM-TR001-B87",
        "note": "Exact blue-cover identity; published size fields conflict. Obtain current finished dimensions and table-fit confirmation before ordering.",
        "asin": "B0753FHDC8",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports table cover Mahjong",
        "requiredTitleTerms": [
          "table cover",
          "Mahjong",
          "professional grade"
        ]
      }
    ]
  },
  "/wfh/best-usb-c-docks-for-two-monitors": {
    "batch": 2,
    "products": [
      {
        "query": "CalDigit TS4 Thunderbolt 4 dock 98W",
        "label": "CalDigit TS4",
        "note": "Native displays on a supported host. Does not bypass base M1/M2 limits; plan the DisplayPort and downstream Thunderbolt video connections.",
        "asin": "B09GK8LBWS",
        "brand": "CalDigit",
        "expectedTitle": "CalDigit TS4 Thunderbolt 4 dock",
        "requiredTitleTerms": [
          "TS4",
          "Thunderbolt",
          "dock"
        ]
      },
      {
        "query": "Plugable UD-6950PDH dual monitor docking station",
        "label": "Plugable UD-6950PDH",
        "note": "Office DisplayLink option, with software and permissions required. On macOS, protected video can fail on all screens while connected.",
        "asin": "B09TQY97MJ",
        "brand": "Plugable",
        "expectedTitle": "Plugable docking station dual monitor",
        "requiredTitleTerms": [
          "docking station",
          "dual monitor"
        ],
        "model": "UD-6950PDH"
      }
    ]
  },
  "/wfh/best-video-call-lighting-for-glasses": {
    "batch": 2,
    "products": [
      {
        "query": "Elgato Key Light Neo Black with Monitor Mount",
        "label": "Elgato Key Light Neo with monitor mount, black",
        "note": "Compact with-mount package. Position and power source matter; a diffused panel cannot guarantee reflection-free glasses.",
        "asin": "B0FDBL5MVM",
        "brand": "Elgato",
        "expectedTitle": "Elgato Key Light Neo Black with Monitor Mount",
        "requiredTitleTerms": [
          "Key Light Neo",
          "Black",
          "Monitor Mount"
        ]
      }
    ]
  },

  "/coffee/breville-bambino-plus-vs-gaggia-classic-pro": {
    "batch": 2,
    "products": [
      {
        "query": "Breville Bambino Plus Espresso Machine BES500BSS",
        "label": "Breville Bambino Plus BES500",
        "asin": "B07JVD78TT",
        "brand": "Breville",
        "expectedTitle": "Breville Bambino Plus",
        "requiredTitleTerms": [
          "Bambino",
          "Plus"
        ],
        "forbiddenTitleTerms": [
          "BES450"
        ],
        "note": "US Bambino Plus BES500, not the base Bambino. The ASIN comes from the existing verified Creator API baseline; preserve the API-returned URL and image."
      },
      {
        "query": "Gaggia Classic Pro E24 Espresso Machine US 120V",
        "label": "Gaggia Classic Pro E24 (US brass-boiler model)",
        "brand": "Gaggia",
        "expectedTitle": "Gaggia Classic E24",
        "requiredTitleTerms": [
          "E24",
          "120V",
          "espresso machine"
        ],
        "forbiddenTitleTerms": [
          "220V",
          "230V",
          "240V",
          "220 V",
          "230 V",
          "240 V",
          "heating element",
          "boiler only",
          "replacement boiler",
          "pump",
          "gasket"
        ],
        "note": "Require positive E24 and 120V title evidence for this US brass-boiler comparison. Older Pro/Evo, overseas, or voltage-ambiguous listings are not substitutes. Retain safe fallback when these checks fail."
      }
    ]
  },
  "/beauty/dr-dennis-gross-vs-omnilux-contour": {
    "batch": 2,
    "products": [
      {
        "query": "Dr Dennis Gross DRx SpectraLite FaceWare Pro LED Mask",
        "label": "Dr. Dennis Gross DRx SpectraLite FaceWare Pro",
        "expectedTitle": "Dr Dennis Gross SpectraLite FaceWare Pro",
        "requiredTitleTerms": [
          "SpectraLite",
          "FaceWare",
          "Pro",
          "mask"
        ],
        "forbiddenTitleTerms": [
          "EyeCare",
          "LipWare",
          "BodyWare",
          "replacement",
          "strap",
          "controller",
          "charger",
          "charging cable",
          "power cable",
          "adapter"
        ],
        "note": "Full-face FaceWare Pro device only, not another body-area device or accessory. No ASIN verified for this refresh; retain a search fallback unless Creator API verifies the exact product. A product match does not establish authorized-seller or warranty eligibility.",
        "brand": "Dr. Dennis Gross"
      }
    ]
  },

  "/coffee/1zpresso-jx-pro-vs-comandante-c40": {
    "batch": 2,
    "products": [
      {
        "query": "1Zpresso JX-Pro original manual coffee grinder",
        "label": "1Zpresso JX-Pro (original)",
        "brand": "1Zpresso",
        "expectedTitle": "1Zpresso JX Pro",
        "requiredTitleTerms": [
          "JX Pro",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "JX Pro S",
          "JX ProS",
          "J Ultra",
          "J Max",
          "K Ultra",
          "catch cup",
          "carrying case",
          "handle only",
          "burr set",
          "grinder handle",
          "spare handle"
        ],
        "note": "Legacy original JX-Pro only. Confirm stock, condition and support; JX-Pro S or J-Ultra is not a substitute."
      },
      {
        "query": "Comandante C40 MK4 Nitro Blade manual coffee grinder",
        "label": "Comandante C40 MK4 Nitro Blade",
        "brand": "Comandante",
        "expectedTitle": "Comandante C40 MK4 Nitro Blade",
        "requiredTitleTerms": [
          "C40",
          "MK4",
          "Nitro Blade",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "MK3",
          "C60",
          "Trailmaster",
          "Tigershark",
          "Red Clix",
          "jar",
          "catch cup",
          "carrying case",
          "protective case",
          "handle only",
          "shaft",
          "drivetrain",
          "grinder handle",
          "spare handle"
        ],
        "note": "Standard MK4 Nitro Blade grinder, not a separate jar, drivetrain or another burr edition."
      }
    ]
  },
  "/coffee/acaia-lunar-vs-timemore-black-mirror-nano": {
    "batch": 2,
    "products": [
      {
        "query": "Acaia Lunar 2021 espresso coffee scale",
        "label": "Acaia Lunar 2021",
        "brand": "Acaia",
        "expectedTitle": "Acaia Lunar 2021",
        "requiredTitleTerms": [
          "Lunar",
          "2021",
          "scale"
        ],
        "forbiddenTitleTerms": [
          "Pearl",
          "Pyxis",
          "Cinco",
          "weighing plate",
          "carrying case",
          "protective case",
          "base",
          "protective film",
          "silicone pad",
          "charger",
          "charging cable",
          "adapter"
        ],
        "note": "2021 generation only. Check cup clearance; Lunar is water-resistant, not waterproof."
      },
      {
        "query": "TIMEMORE Black Mirror Nano coffee scale",
        "label": "Timemore Black Mirror Nano, white",
        "brand": "TIMEMORE",
        "expectedTitle": "TIMEMORE Black Mirror Nano",
        "requiredTitleTerms": [
          "Black Mirror",
          "Nano",
          "scale"
        ],
        "forbiddenTitleTerms": [
          "Mini",
          "Basic",
          "Pro"
        ],
        "note": "Exact Nano, not Mini or Basic. Check current availability, side-button clearance and seller support. Pinned white variant; do not substitute a different Nano color ASIN without verification.",
        "asin": "B09KL96K8V"
      }
    ]
  },
  "/coffee/aeropress-original-vs-aeropress-premium": {
    "batch": 2,
    "products": [
      {
        "query": "AeroPress Original standard coffee maker",
        "label": "AeroPress Original",
        "brand": "AeroPress",
        "expectedTitle": "AeroPress Original Coffee Press",
        "requiredTitleTerms": [
          "Original",
          "Coffee Press"
        ],
        "forbiddenTitleTerms": [
          "XL",
          "Clear",
          "Go",
          "Premium",
          "Steel"
        ],
        "note": "Standard-size Original brewer, not Original XL or a filter-only listing.",
        "asin": "B0047BIWSK",
        "model": "85A01"
      },
      {
        "query": "AeroPress Premium glass metal coffee maker",
        "label": "AeroPress Premium, black",
        "brand": "AeroPress",
        "expectedTitle": "AeroPress Premium Coffee Press Glass",
        "requiredTitleTerms": [
          "Premium",
          "Coffee Press",
          "Glass"
        ],
        "forbiddenTitleTerms": [
          "Walnut",
          "XL",
          "Original",
          "Go Plus",
          "Clear",
          "Go"
        ],
        "note": "Glass-and-metal Premium brewer. Handwash only; not the Steel or Premium Walnut model. The verified catalog identity is the black finish.",
        "asin": "B0FRWSKCX6",
        "model": "PR001"
      }
    ]
  },
  "/coffee/baratza-encore-esp-vs-fellow-opus-2": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Encore ESP coffee grinder black",
        "label": "Baratza Encore ESP",
        "brand": "Baratza",
        "expectedTitle": "Baratza Encore ESP",
        "requiredTitleTerms": [
          "Encore",
          "ESP"
        ],
        "forbiddenTitleTerms": [
          "Pro"
        ],
        "note": "Original Encore ESP in black, not standard Encore or Encore ESP Pro.",
        "asin": "B0BW272XCV"
      },
      {
        "query": "Fellow Opus 2 conical burr coffee grinder",
        "label": "Fellow Opus 2",
        "brand": "Fellow",
        "expectedTitle": "Fellow Opus 2",
        "requiredTitleTerms": [
          "Opus 2",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "Opus 1",
          "Ode",
          "Walnut",
          "wood lid"
        ],
        "note": "Opus 2 with 48 mm burrs and stepless adjustment. The original 40 mm Opus is not a substitute. Pinned black North American model.",
        "asin": "B0FPCHNSX2",
        "model": "1222MB-NA"
      }
    ]
  },
  "/coffee/baratza-virtuoso-plus-vs-fellow-ode-gen-2": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Virtuoso Plus coffee grinder",
        "label": "Baratza Virtuoso+",
        "brand": "Baratza",
        "expectedTitle": "Baratza Virtuoso+ Coffee Grinder",
        "requiredTitleTerms": [
          "Virtuoso+",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "Encore",
          "Sette",
          "Vario"
        ],
        "note": "Digital-timer Virtuoso+, not the original Virtuoso. Weigh output when calibrating a timed dose.",
        "asin": "B07QMY8GLX",
        "model": "Virtuoso+"
      },
      {
        "query": "Fellow Ode Gen 2 coffee grinder standard brew burrs",
        "label": "Fellow Ode Gen 2, standard burrs",
        "brand": "Fellow",
        "expectedTitle": "Fellow Ode Gen 2 Coffee Grinder",
        "requiredTitleTerms": [
          "Ode",
          "Gen 2",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "SSP",
          "Gen 1",
          "Opus"
        ],
        "note": "Complete Gen 2 grinder with standard Gen 2 Brew Burrs, not a burr-only upgrade or SSP configuration. Not for espresso.",
        "asin": "B0BLRMCM9Y",
        "model": "Ode Gen 2"
      }
    ]
  },
  "/coffee/breville-barista-express-vs-delonghi-la-specialista": {
    "batch": 2,
    "products": [
      {
        "query": "Breville Barista Express BES870XL espresso machine",
        "label": "Breville Barista Express BES870XL",
        "brand": "Breville",
        "expectedTitle": "Breville BES870XL Barista Express Espresso Machine",
        "requiredTitleTerms": [
          "BES870XL",
          "Barista Express",
          "Espresso Machine"
        ],
        "forbiddenTitleTerms": [
          "Impress",
          "Pro",
          "Touch",
          "Bambino"
        ],
        "note": "Original BES870XL, not Express Impress or Barista Pro. Confirm US electrical specification and seller warranty.",
        "asin": "B00CH9QWOU",
        "model": "BES870XL"
      },
      {
        "query": "De'Longhi La Specialista EC9335M espresso machine",
        "label": "De'Longhi La Specialista EC9335M",
        "brand": "De'Longhi",
        "expectedTitle": "De'Longhi La Specialista EC9335M Espresso Machine",
        "requiredTitleTerms": [
          "La Specialista",
          "espresso",
          "EC9335M"
        ],
        "forbiddenTitleTerms": [
          "Arte",
          "Evo",
          "Prestigio",
          "Opera",
          "Maestro",
          "Touch"
        ],
        "note": "Legacy EC9335M only. Verify condition, complete accessories, voltage and warranty; newer La Specialista models are not substitutes.",
        "asin": "B07QMWZ6PT",
        "model": "EC9335M"
      }
    ]
  },
  "/coffee/fellow-stagg-ekg-vs-cosori-gooseneck": {
    "batch": 2,
    "products": [
      {
        "query": "Fellow Stagg EKG original electric kettle",
        "label": "Fellow Stagg EKG (original)",
        "brand": "Fellow",
        "expectedTitle": "Fellow Stagg EKG Electric Gooseneck Kettle",
        "requiredTitleTerms": [
          "Stagg EKG",
          "kettle"
        ],
        "forbiddenTitleTerms": [
          "Pro",
          "Studio",
          "EKG Plus",
          "stovetop",
          "Corvo",
          "EKG+"
        ],
        "note": "Original EKG only. Current Pro and Pro Studio models have different features and are not substitutions.",
        "asin": "B077JBQZPX",
        "model": "1137"
      },
      {
        "query": "COSORI CO108-NK electric gooseneck kettle",
        "label": "COSORI CO108-NK",
        "brand": "Cosori",
        "expectedTitle": "Cosori Gooseneck Electric Kettle",
        "requiredTitleTerms": [
          "Gooseneck",
          "Kettle"
        ],
        "forbiddenTitleTerms": [
          "Smart",
          "Bluetooth",
          "WiFi",
          "Wi-Fi"
        ],
        "note": "CO108-NK with five temperature presets, not a smart kettle. Check the US electrical version.",
        "model": "CO108-NK",
        "asin": "B07T1CH2HH"
      }
    ]
  },
  "/coffee/hario-v60-vs-chemex-classic": {
    "batch": 2,
    "products": [
      {
        "query": "HARIO V60 02 plastic clear VD-02T dripper",
        "label": "Hario V60 02 clear plastic dripper",
        "brand": "Hario",
        "expectedTitle": "Hario V60",
        "requiredTitleTerms": [
          "V60",
          "02",
          "plastic",
          "clear",
          "dripper"
        ],
        "forbiddenTitleTerms": [
          "ceramic",
          "metal",
          "glass",
          "01",
          "03",
          "switch"
        ],
        "note": "Clear plastic size 02, model VD-02T. Needs size 02 papers and a stable mug or server. Require returned VD-02T part/model evidence because listing model fields conflict.",
        "model": "VD-02T",
        "asin": "B001RBTSMM"
      },
      {
        "query": "Chemex Six Cup Classic CM-6A coffee maker",
        "label": "Chemex Six Cup Classic CM-6A",
        "brand": "Chemex",
        "expectedTitle": "Chemex Classic",
        "requiredTitleTerms": [
          "Classic",
          "6-Cup"
        ],
        "forbiddenTitleTerms": [
          "8 cup",
          "10 cup",
          "3 cup",
          "glass handle",
          "handblown"
        ],
        "note": "Six-cup Classic carafe, CM-6A. Capacity is 30 US fl oz, not six large mugs.",
        "model": "CM-6A",
        "asin": "B0000YWF5E"
      }
    ]
  },
  "/coffee/timemore-chestnut-c3-vs-kingrinder-k6": {
    "batch": 2,
    "products": [
      {
        "query": "TIMEMORE Chestnut C3 manual coffee grinder",
        "label": "Timemore Chestnut C3 (standard)",
        "brand": "TIMEMORE",
        "expectedTitle": "TIMEMORE Chestnut C3",
        "requiredTitleTerms": [
          "Chestnut",
          "C3",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "C3S",
          "C3 S",
          "Pro",
          "ESP",
          "C2",
          "C5",
          "grinder handle",
          "handle only",
          "spare handle",
          "replacement crank",
          "burr set",
          "catch cup",
          "carrying case"
        ],
        "note": "Standard C3 with classic internal adjustment. Do not substitute C3S, Pro or ESP editions."
      },
      {
        "query": "KINGrinder K6 manual coffee grinder",
        "label": "KINGrinder K6, straight handle silver",
        "brand": "KINGrinder",
        "expectedTitle": "KINGrinder K6",
        "requiredTitleTerms": [
          "K6",
          "grinder",
          "straight handle"
        ],
        "forbiddenTitleTerms": [
          "K4",
          "K2",
          "K7"
        ],
        "note": "Complete K6 grinder with external adjustment, not another K-series model or a replacement part. The pinned current catalog identity has a straight handle and silver finish.",
        "asin": "B0GKFDZ725"
      }
    ]
  },

  // Batch 3: mappings are added after primary-source identity review.
  '/beauty/revlon-one-step-vs-loreal-steampod': { batch: 3, products: [
    { query: 'Revlon One-Step Volumizer PLUS 2.4 inch US', label: 'Revlon One-Step Volumizer PLUS', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'REVLON', expectedTitle: 'Revlon One Step Volumizer Plus', requiredTitleTerms: ['Volumizer', 'PLUS', '2.4'], forbiddenTitleTerms: ['Air Straight', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt', 'head only', 'replacement head'], note: 'PLUS with the 2.4-inch oval head, not the original Volumizer or Air Straight. Confirm US electrical compatibility. SteamPod remains linked to its official US source in the article.' },
  ] },
  '/beauty/nuface-trinity-vs-solawave-wand': { batch: 3, products: [
    { query: 'NuFACE TRINITY+ Starter Kit', label: 'NuFACE TRINITY+ Starter Kit', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'NuFACE', expectedTitle: 'NuFACE Trinity+ Starter Kit', requiredTitleTerms: ['Trinity+', 'Starter Kit'], forbiddenTitleTerms: ['Complete', 'Mini', 'FIX', 'refill', 'attachment only'], note: 'TRINITY+ Starter Kit, not Classic Trinity or Complete. Check the included activator and read the exact device manual before buying.' },
    { query: 'Solawave Radiant Renewal 4 in 1 Skincare Wand', label: 'Solawave Radiant Renewal 4-in-1 Wand', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'Solawave', expectedTitle: 'Solawave Radiant Renewal Skincare Wand', requiredTitleTerms: ['Radiant Renewal', '4-in-1', 'Wand'], forbiddenTitleTerms: ['Advanced', 'mini', 'mask', 'serum only', 'charger only'], note: 'Radiant Renewal generation, not the earlier Advanced wand. Check the full 12-minute routine and contraindications; serum may be separate.' },
  ] },
  '/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide': { batch: 3, products: [
    { query: 'LANEIGE Lip Sleeping Mask Berry 20g', label: 'Laneige Lip Sleeping Mask, Berry 20g', brand: 'LANEIGE', expectedTitle: 'LANEIGE Lip Sleeping Mask Berry', requiredTitleTerms: ['Berry', '20g'], forbiddenTitleTerms: ['Vanilla', 'Gummy', 'Candy', 'Grapefruit', 'mini', 'set', 'pack', 'duo', 'topper', 'holder', 'applicator'], note: 'Standard Berry 20g jar only. If the returned title does not establish the flavor and size, the card remains a search link. Rhode is official-store-first in the article.' },
  ] },
  '/books/genre-fiction/best-historical-epics-2026': { batch: 3, books: [
    { title: 'The Pillars of the Earth', author: 'Ken Follett' },
    { title: 'Shōgun', author: 'James Clavell', asin: '1982537523' },
    { title: 'Lonesome Dove', author: 'Larry McMurtry' },
    { title: 'The Covenant of Water', author: 'Abraham Verghese' },
    { title: 'Wolf Hall', author: 'Hilary Mantel' },
  ] },
  '/books/genre-fiction/best-new-spy-thriller-books-2026': { batch: 3, books: [
    { title: 'The Taper Man', author: 'Nick Harkaway' },
    { title: 'Icarus 17', author: 'Charles Cumming' },
    { title: 'Ransom', author: 'Daniel Silva' },
  ] },
  '/beauty/dyson-airstrait-vs-ghd-duet-style': { batch: 3, products: [
    { query: 'Dyson Airstrait straightener US 120V', label: 'Dyson Airstrait', brand: 'Dyson', expectedTitle: 'Dyson Airstrait straightener', requiredTitleTerms: ['Airstrait', 'straightener'], forbiddenTitleTerms: ['Airwrap', 'Corrale', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt', 'case', 'stand', 'holder', 'filter'], note: 'Airstrait, not Airwrap or Corrale. Confirm the selected US electrical version and seller support before buying.' },
    { query: 'ghd Duet Style 2 in 1 hot air styler US', label: 'ghd Duet Style', brand: 'ghd', expectedTitle: 'ghd Duet Style styler', requiredTitleTerms: ['Duet Style', 'styler'], forbiddenTitleTerms: ['Blowdry', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt', 'case', 'stand', 'holder'], note: 'Duet Style, not the Duet Blowdry brush. US version is not universal voltage; Shine Shot is for fully dry hair only.' },
  ] },
  "/beauty/dyson-airwrap-vs-shark-flexstyle-for-fine-flat-hair": {"batch":4,"products":[{"query":"Dyson Airwrap i.d. Straight Wavy multi styler","label":"Dyson Airwrap i.d. Straight+Wavy","accessoryOnlyTitleTerms":["case","cases","stand","stands","charger","chargers","cable","cables","holder","cover","pouch","bag","dock","adapter"],"brand":"Dyson","expectedTitle":"Dyson Airwrap i d multi styler dryer Straight+Wavy","requiredTitleTerms":["i.d.","Straight","Wavy"],"forbiddenTitleTerms":["Co-anda2x","Origin","Curly","Coily","220V","240V","220 V","240 V","220 volt","240 volt"],"note":"The i.d. Straight+Wavy kit. Verify the selected color and included tools against the article; do not substitute Origin, Complete or Co-anda2x."},{"query":"Shark FlexStyle HD430 hair styling system","label":"Shark FlexStyle HD430","accessoryOnlyTitleTerms":["case","cases","stand","stands","charger","chargers","cable","cables","holder","cover","pouch","bag","dock","adapter"],"brand":"Shark","model":"HD430","expectedTitle":"Shark FlexStyle styling system","requiredTitleTerms":["HD430"],"forbiddenTitleTerms":["IonCurl","Glam","HD435","HD440","220V","240V","220 V","240 V","220 volt","240 volt"],"note":"Original US HD430: two directional curlers, oval brush, paddle brush and concentrator. A diffuser is not included in this kit."}]},
  '/beauty/dyson-airwrap-vs-shark-flexstyle': { batch: 3, products: [
    { query: 'Dyson Airwrap i.d. Straight Wavy multi styler', label: 'Dyson Airwrap i.d. Straight+Wavy', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'Dyson', expectedTitle: 'Dyson Airwrap i d multi styler dryer Straight+Wavy', requiredTitleTerms: ['i.d.', 'Straight', 'Wavy'], forbiddenTitleTerms: ['Co-anda2x', 'Origin', 'Curly', 'Coily', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt'], note: 'The i.d. Straight+Wavy kit. Verify the selected color and included tools against the article; do not substitute Origin, Complete or Co-anda2x.' },
    { query: 'Shark FlexStyle HD430 hair styling system', label: 'Shark FlexStyle HD430', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'Shark', model: 'HD430', expectedTitle: 'Shark FlexStyle styling system', requiredTitleTerms: ['HD430'], forbiddenTitleTerms: ['IonCurl', 'Glam', 'HD435', 'HD440', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt'], note: 'Original US HD430: two directional curlers, oval brush, paddle brush and concentrator. A diffuser is not included in this kit.' },
  ] },
  '/books/best-mark-manson-books': { batch: 3, books: [
    { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson' },
    { title: 'Everything Is F*cked', author: 'Mark Manson' },
    { title: 'Models', author: 'Mark Manson' },
    { title: 'Will', author: 'Will Smith' },
    { title: 'The Subtle Art of Not Giving a F*ck Journal', author: 'Mark Manson' },
  ] },
}
