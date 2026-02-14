export interface Moment {
  date: string;
  title: string;
  description: string;
  emoji: string;
  photo?: string | string[]; // single path or array of paths, e.g. "/photos/first-meet.jpg"
  camera?: boolean; // if true, prompts user to take a live photo
}

/**
 * Each moment has:
 * - date: When it happened
 * - title: A short title for the moment
 * - description: The story / memory (keep it 1-3 sentences)
 * - emoji: An emoji that represents the moment
 * - photo: (optional) Path to a photo or array of photos in /public/photos/
 */
export const moments: Moment[] = [
  {
    date: "7th August 2025",
    title: "Glad we met",
    description:
      "Started with Hey Hey Hey and now we are here, kissi to Sumeet for the 0th move ( yes i call it a zero move ). Mujhe bharosa nahi tha reply aayega par agyaaaaa yaayyyy",
    emoji: "💫",
    photo: "/photos/Screenshot_20260214-205846-2.jpg",
  },
  {
    date: "15th September 2025",
    title: "Before we start",
    description:
      "Here is a hand made tulip for you",
    emoji: "🌷",
    photo: "/photos/IMG_20260214_175409_811.jpg",
  },
  {
    date: "20th November 2025",
    title: "The Nth meet",
    description:
      "I remember maine first meet me tumhe AI and machine learning explain kiya tha and I was wearing the shirt that you have right now.",
    emoji: "💬",
    photo: "/photos/WhatsApp-Image-2025-09-20-at-17.27.25-1.jpeg",
  },
  {
    date: "20th November 2025",
    title: "Star culture",
    description:
      "I love humara yelo start wala culture hehe , fool aapke liye toda nahi hai maine",
    emoji: "⭐",
    photo: ["/photos/WhatsApp-Image-2025-09-20-at-17.27.08-1.jpeg", "/photos/WhatsApp-Image-2025-09-20-at-17.27.15-1.jpeg", "/photos/WhatsApp-Image-2025-09-20-at-17.27.15.jpeg"],
  },
  {
    date: "14th October 2025",
    title: "UHUHUHUHUHUH ( zabardarst khaasi )",
    description:
      "Rajiv chowk subah 8 baje ke sannate me, we met, she ran to me , she jumped , we hugged (huggie kardo) , she gives the best best hugs. I was a little nervous, but you turned out to be a super fun girl",
    emoji: "🤗",
    photo: ["/photos/PXL_20251014_031230955.RAW-01.COVER.jpg", "/photos/PXL_20251014_031906724.RAW-01.COVER.jpg", "/photos/PXL_20251014_042118577.RAW-01.COVER.jpg"],
  },
  {
    date: "29th October 2025",
    title: "Saddie khushi",
    description:
      "Ankit trying to shantofy sad Khushi, was a lilil successful only. You look good in shirts Khushi",
    emoji: "🥺",
    photo: ["/photos/Screenshot_20251029-013842.png", "/photos/Screenshot_20251029_015523.jpg"],
  },
  {
    date: "5th November 2025",
    title: "EHEHEHEHE",
    description:
      "This was i think when you were going to a shaadi, makeup kiya tha and you looked JORJIUSS OMGGG.",
    emoji: "😍",
    photo: "/photos/IMG_20251105_190853.jpg",
  },
  {
    date: "20th November 2025",
    title: "👀",
    description:
      "Hmm ye sab kya chal raha hai ? dil wil bana rahe ho dono hmmm. I like your smile here",
    emoji: "👀",
    photo: "/photos/Screenshot_20251120-010431.png",
  },
  {
    date: "5th December 2025",
    title: "Happy Birthday, Khushi",
    description:
      "i wish mai wahan hota tumhara din aur sundar banane ko, happieee 22 adult ( was going to write kiddo ). Absolutely love you for keeping the pendent with you always",
    emoji: "🎂",
    photo: ["/photos/IMG_20251206_021738_765.jpg", "/photos/IMG-20251205-WA0057.jpg"],
  },
  {
    date: "7th December 2025",
    title: "Zabardasti ki smile",
    description:
      "I asked ki hey khushi , smile karte hue photo bhejo chalo. Youre like yelo kardi but zabardasti ki hai and then ended up in bathroom genuine smile. I dont know woh baddie wali pic kyu hai isme muah.",
    emoji: "😁",
    photo: ["/photos/IMG-20251207-WA0030.jpg", "/photos/IMG-20251207-WA0032.jpg", "/photos/IMG-20251207-WA0038.jpg"],
  },
  {
    date: "9th December 2025",
    title: "Kissi pose I think",
    description: "",
    emoji: "😘",
    photo: "/photos/IMG-20251209-WA0029.jpg",
  },
  {
    date: "12th December 2025",
    title: "Khushi ne firse goat move pull kardiya",
    description:
      "It was a very sweet behaviour to come and meet me at the airport. I owe you a kissi for that. Really really pretty day. The second picture is, I saw a shine in your eyes when you saw that store, And i like you more everytime i see that shine in your eyes.",
    emoji: "🐐",
    photo: ["/photos/PXL_20251210_143837485.jpg", "/photos/PXL_20251210_154708537.jpg"],
  },
  {
    date: "12th December 2025",
    title: "Wow",
    description:
      "Ye picture dekh ke thoda sa chest heavy hua and i smiled. I love holding your hands , can i please please hold them for like idk a trillion years 🥹",
    emoji: "🥹",
    photo: "/photos/PXL_20251212_153630075.jpg",
  },
  {
    date: "12th December 2025",
    title: "Whatsapp ka wallpaper",
    description:
      "ye life me dil banana was impromptu , i dont remember why we did, but qegnouengoangionieg wow.",
    emoji: "💛",
    photo: ["/photos/PXL_20251212_164427686.jpg", "/photos/PXL_20251212_165455179.jpg"],
  },
  {
    date: "14th December 2025",
    title: "FIRSEEEE HUGGGG",
    description:
      "( chest firse heavy, no smile this time) I was a little sad leaving, bohot comforting hug tha, i did not wanted it to end. Can we please hug like this when we meet the next time?",
    emoji: "🫂",
    photo: "/photos/IMG-20251214-WA0294.jpg",
  },
  {
    date: "14th December 2025",
    title: "😩",
    description: "Wallpaper.",
    emoji: "😩",
    photo: "/photos/IMG-20251214-WA0320.jpg",
  },
  {
    date: "14th December 2025",
    title: "Date?",
    description:
      "I will call this a date, Khushi ne kiya plan ( maine sundar paint kiya 9/10 ). Mere haath pe apna naam likhdo please wapas se ( meri fielding yahan zyada set hogyi thi).",
    emoji: "🎨",
    photo: ["/photos/PXL_20251214_082937142.jpg", "/photos/PXL_20251214_083529700.jpg", "/photos/PXL_20251214_084035516.jpg"],
  },
  {
    date: "15th December 2025",
    title: "First flower",
    description:
      "Thankyou Khushi! Thankyou soo much, very considerate of you bb. I almost had tears in my eyes bhai nahi pata tha first flower receive karne pe aisa feel hota. Warm huggies for you.",
    emoji: "🌸",
    photo: "/photos/PXL_20251215_181247076.jpg",
  },
  {
    date: "20th December 2025",
    title: "It all started from kinder joy",
    description:
      "I got a kinder joy, Amrood and lays ka packet first time tumse. That time I decided iss ladki ko itne sare gifts de dunga maza aa jayega. We did not knew each other itne zyada acche se at that time firbhi you sent me giftss 🥹",
    emoji: "🥚",
    photo: "/photos/IMG-20251220-WA0334.jpg",
  },
  {
    date: "21st December 2025",
    title: "Dream?",
    description:
      "Ye toh mai bol ke bataunga",
    emoji: "💭",
    photo: "/photos/IMG-20251221-WA0003.jpg",
  },
  {
    date: "22nd December 2025",
    title: "Proud wali smile",
    description:
      "Bottle kaise balance karli bhai aapne sir pe ? fir books bhi ?",
    emoji: "😄",
    photo: ["/photos/IMG-20251222-WA0000.jpg", "/photos/Screenshot-2025-12-22-at-2.23.12-AM.png"],
  },
  {
    date: "25th December 2025",
    title: "Wakey wakey",
    description:
      "Mujhe aise uthna hai subah, har subah. I like my mornings now ! Thank you Khushi!",
    emoji: "☀️",
    photo: "/photos/PXL_20251225_054318007.NIGHT.jpg",
  },
  {
    date: "26th December 2025",
    title: "Silly",
    description:
      "boop boop boop boop boop boop. Badi badi aankho se aise mat dekho mujhe sharam aata hehe",
    emoji: "🙈",
    photo: "/photos/Screenshot-2025-12-26-at-1.57.59-AM.png",
  },
  {
    date: "31st December 2025",
    title: "Moana ( naam yaad hai hehe)",
    description:
      "I saw a smile and shine in your eyes every time the protagonist did something brave. Hmm",
    emoji: "🌊",
    photo: ["/photos/Screenshot-2025-12-31-at-3.20.48-AM.png", "/photos/Screenshot-2025-12-31-at-3.42.46-AM.png", "/photos/Screenshot-2025-12-31-at-4.24.03-AM.png"],
  },
  {
    date: "3rd January 2026",
    title: "Chandu",
    description:
      "next wala mera chandu. Yes, mera chandu. Pehle wale se sundar.",
    emoji: "🐶",
    photo: ["/photos/PXL_20260131_130229959.jpg", "/photos/Screenshot-2026-01-03-at-3.20.06-AM.png"],
  },
  {
    date: "7th January 2026",
    title: "Huggie ring",
    description:
      "Sucha cutie gift hehe, I did not used to like rings but see here I am, wearing one, my girl gifted me this!",
    emoji: "💍",
    photo: "/photos/PXL_20260107_162250085.jpg",
  },
  {
    date: "12th January 2026",
    title: "Kamal",
    description:
      "Very thoughtful gift, I have its petals with me, in a book, I hope the book knows the value it's carrying.",
    emoji: "🪷",
    photo: "/photos/PXL_20260112_191529418.jpg",
  },
  {
    date: "18th January 2026",
    title: "Idhar hickey dedo",
    description:
      "Oh you actually gave here onlie, wow bhay we already knew whats going to happen hehehehehehhehe.",
    emoji: "😏",
    photo: "/photos/IMG-20260118-WA0020.jpg",
  },
  {
    date: "30th January 2026",
    title: "First silly",
    description:
      "how to stop myself thinking of kissing you when you make faces like thiiiissss?",
    emoji: "🤪",
    photo: ["/photos/IMG-20260130-WA0072.jpg", "/photos/IMG-20260130-WA0073.jpg"],
  },
  {
    date: "2nd February 2026",
    title: "I like",
    description:
      "I have a weird attraction when someone calls or writes my name. Wow this is soo cute mai tattoo karwalu? 🥹",
    emoji: "✍️",
    photo: "/photos/PXL_20260202_182939157.jpg",
  },
  {
    date: "6th February 2026",
    title: "She decides to pull a stunt",
    description:
      "Very brave of you, thank you both! I was scared and excited at the same time, jeet gaye guys.",
    emoji: "🎢",
    photo: "/photos/IMG_20260206_214217442.jpg",
  },
  {
    date: "7th February 2026",
    title: "Welcome ji",
    description:
      "I still skip some heartbeats when I see you, megic megic. Its very comforting meeting you Khushi. Please teleport na",
    emoji: "💓",
    photo: ["/photos/PXL_20260206_195419085.jpg", "/photos/PXL_20260206_195419630.jpg"],
  },
  {
    date: "7th February 2026",
    title: "Mai nahi chhod raha ye, huh",
    description: "",
    emoji: "🤝",
    photo: "/photos/IMG_20260207_012913741.jpg",
  },
  {
    date: "7th February 2026",
    title: "HANUMAN AAP?",
    description:
      "he is with you, everytime, in the flight, cab. I was amazed bhai ki arey wow what are the odds hehehehe nice. Sometimes its hard to believe for me in all of this but sometimes its like what?",
    emoji: "🙏",
    photo: "/photos/IMG_20260207_021416077.jpg",
  },
  {
    date: "7th February 2026",
    title: "Couple picture agyi guys",
    description:
      "i will freeze to infinity if you are sleeping on my shoulders just to ensure tumhari neend na khul jaye.",
    emoji: "🥰",
    photo: "/photos/IMG_20260207_022053759.jpg",
  },
  {
    date: "7th February 2026",
    title: "Why are you soii prettyyyy???",
    description: "",
    emoji: "😍",
    photo: "/photos/PXL_20260206_222016314.jpg",
  },
  {
    date: "7th February 2026",
    title: "Hmm",
    description:
      "ye bhi bolke batana pdega I cant write",
    emoji: "😶",
    photo: "/photos/IMG_20260207_044641250.jpg",
  },
  {
    date: "7th February 2026",
    title: "Sad times",
    description:
      "I think maine bataya tha, My neck started aching the moment you left. Why Khushi why?",
    emoji: "😢",
    photo: "/photos/IMG_20260207_094625325.jpg",
  },
  {
    date: "7th February 2026",
    title: "HEHEHEHEH",
    description:
      "If superhappy had a face. Muah.",
    emoji: "😁",
    photo: "/photos/Screenshot_20260207-154936.png",
  },
  {
    date: "8th February 2026",
    title: "Virtual date guys",
    description:
      "\"Ankit tumhe kuch kaam hai 3 baje tak?\"",
    emoji: "💻",
    photo: "/photos/PXL_20260208_101013329.jpg",
  },
  {
    date: "11th February 2026",
    title: "Bro seems very happy, kya kiya tumne bro ke sath?",
    description:
      "Adorbieee",
    emoji: "🥹",
    photo: "/photos/PXL_20260211_062653848.jpg",
  },
  {
    date: "11th February 2026",
    title: "Max Peace",
    description:
      "Nights, me watching you sleeping , mera favoure gaana with mere fav insan on the screen. Aur kya chahiye?",
    emoji: "🌙",
    photo: "/photos/PXL_20260211_210837756.jpg",
  },
  {
    date: "14th February 2026",
    title: "Me when you're not around ( most of the times )",
    description: "",
    emoji: "🥺",
    photo: "/photos/Screenshot_20260214-180357.png",
  },
  {
    date: "14th February 2026",
    title: "So , Happy Valentine's Khushi?",
    description: "",
    emoji: "❤️",
    photo: "/photos/IMG-20260214-WA0039.jpg",
  },
  {
    date: "Today",
    title: "Right Now, Reading This",
    description:
      "And here we are. You, reading this. Me, hoping this makes you smile as much as you make me smile every single day.",
    emoji: "💝",
    camera: true,
  },
];
