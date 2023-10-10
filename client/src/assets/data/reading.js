export const reading = [{
        id: 1,
        title: 'Sequence 01: Itineraries: My Extraordinary Trip “part 01”',
        cat: 'reading',
        test: 'r-t-1',
        hint: 'Before reading the text, what do you think it is going to be about?, \n  what are the hints you relied on to guess?, \n  Read the text quickly and try to get the general idea of the text.',
        text: [
            'Our school organized a seven-days trip around Algeria for excellent learners. The departure was from our city; we all gathered near the school with our parents waiting for the couch, but before heading there, I made sure that all the necessary items (my mobile phone, money, my food, my clothes …etc) were all well-packed. Our final destination was Tlemcen with a stop-over for 2 nights in the capital city, Algiers. ',
            ' First, we travelled to Algiers. On the first day, we went on a sightseeing tour around the city. We visited Makam Elchahid and the National Museum of Moudjahid. The latter is a masterpiece located directly beneath Makam Chahid; it aims to collect, preserve and display objects and memories of the struggle against the French colonialism. At the entrance, the guards asked us to turn off our mobile-phones; therefore, I couldn’t take any pictures of that wonderful place. On the second day, we headed to another tourist attraction which was Elhamma Garden also known as “The Botanical Garden”. At first sight, I felt like “Alice in Wonderland”; it’s so huge and there are hundreds of different plants and high trees. ',
        ],
        exp: 'a coach: is a type of bus for travelling long distances',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	They had a one weak trip. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2.	They didn’t take any luggage with them. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3.	They visited Makam Chahid and El Hamma Garden and the National Museum.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '4.	The pupils were allowed to take pictures in the museum. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                ],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '•	This trip was organized by: ',
                        answers: [
                            '1- The school',
                            '2- an organization ',
                            '3- The parents ',
                            '4- The sports club',
                        ],
                        correctAnswer: '1- The school',
                    },
                    {
                        question: '•	The learners gathered near the school: ',
                        answers: [
                            '1- on their own',
                            '2- with their teachers ',
                            '3- with their parents',
                            '4- with their neighbours ',
                        ],
                        correctAnswer: '3- with their parents',
                    },
                    {
                        question: '•	The cities they visited are: ',
                        answers: [
                            '1- Tlemcen then Algiers ',
                            '2- Tlemcen only  ',
                            '3- Algiers only',
                            '4- Algiers then Tlemcen',
                        ],
                        correctAnswer: '4- Algiers then Tlemcen',
                    },
                    {
                        question: '•	The National Museum is: ',
                        answers: [
                            '1- a collection of artistic famous paintings.',
                            '2- a collection of rare stones ',
                            '3- a collection of objects and memories related to the colonialism',
                        ],
                        correctAnswer: '3- a collection of objects and memories related to the colonialism',
                    },
                ],
            },

            //matching
            {
                type: 'matching',
                question: 'read the text again and match each word with its definition ',
                answers: {
                    g1: [
                        '1-	The departure',
                        '2- Final Destination ',
                        '3- Garden',
                        '4-	tourist attraction',
                    ],
                    g2: [
                        'a- a place full of plants and trees ',
                        'b- a place that you start your trip from',
                        'c- a place people like to visit during holidays because it is beautiful and famous.',
                        'd- a place you visit at the end of the trip ',
                    ],
                },

                correctAnswer: ['1-b', '2-d', '3-a', '4-c'],
            },

            //re-ordering
            {
                type: 'reOrdering',
                question: 'Reorder the following ideas based on the their occurrence on the text',
                answers: [
                    '1- They visited Alhamma Garden.',
                    '2- They Started their trip from their city.',
                    '3- They packed their luggage.',
                    '4-They travelled to Algiers.',
                ],
                correctAnswer: ['3', '2', '4', '1'],
            },

            //filling the gaps
            {
                type: 'fillingGaps',
                question: ' Read the text again and fill in the gaps with “a.National Museum/ b.Algiers/ c.Elhamma Garden/ d.the pupils',
                answers: [
                    ' .	 “we” refers to ----- ./ .	“The latter” refers to the ------ ./ .	“it” refers to ----- ./.	“the city” refers to    ----- .',
                ],
                correctAnswer: ['d', 'a', 'c', 'b'],
            },
        ],
    },

    //second
    {
        id: 2,
        title: 'Squence 01: Inside the Battle of Algiers: Memoir of A Woman Freedom Fighter',
        cat: 'reading',
        audioUrl: 'audioReading_1',
        test: 'r-t-2',
        hint: '',
        text: [
            'Zohra Drif, the legendary freedom fighter, was born on a farm in Tiaret. She was a little over University when she joined a group of the (FLN) revolutionaries and placed a bomb in the 19 when the Algerian Revolution broke out. Two years later, she was studying law at Algiers French Milk Bar café. The following year, Mrs Drif was arrested and condemned to 20 years of hard labour for "terrorism". She spent five years in prison before she was finally released upon independence. Here is an extract from her book.',
            "For nearly five years, I was the only Arab girl at the French primary school, with my big long braids and long skirts reaching to my ankles, among the little European I girls with their short hair and their little dresses above the knee. The difference between me and these girls even extended to the foods we ate at ten o'clock in the playground: they pulled out a brioche, a croissant, sometimes a chocolate croissant or a baguette with jam. As for me, I had my Algerian treats-maqrouta, mbardja, msemna or matlou with our family's honey.",
            "I completed my primary-school years as an excellent student, finishing tied for first place in my class with my classmate Roselyne Garcia. I considered Roselyne a dear friend until we reached the sixth-grade entrance exam, a major test that marked the passage from childhood to adolescence. We were in school the day the results were announced. I, Zohra Drif, daughter of the Arab qadi, managed to rank among the first students in the region, whereas my best friend Roselyne, the daughter of Tissemsilt's baker and an excellent student, had failed. I was as shocked as the rest of the school at Roselyne's results.",
            `When we parted to go home, I told her, still crying, "You know, Roselyne, everybody knows you're an excellent student. It was an accident. Next year, you'll get it." Roselyne replied, "But Zohra, it's not that. You don't understand a thing. How do I explain to my mother that you passed and I didn't? She will never understand that Zohra the Arab succeeded and I failed." I was unsure whether I had misunderstood or understood all too well. Soon my tears dried up. I looked her in the eye and spat back, "Well, you'll just have to explain to your mother that it was the Arabs like Zohra who invented mathematics."`,
            `In a few short seconds, I lost my best friend and my innocence. I suddenly realised that all my excellent marks, all my efforts to learn French language and culture and all my sincere feelings of friendship for Roselyne would never make me the equal of Roselyne, the European. With one simple sentence, she put me in my place as
      the "Arab".`,
            `Adapted from: "Inside the Battle of Algiers: Memoir of A Woman Freedom Fighter" by Zohra Drif, Just World Books, USA, 2017
      `,
        ],
        exp: '',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1. Zohra Dhrif realised that she can never be equal to the French girls after the reaction of her friend Rosalyne',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2. Zohra Dhrif didn’t study at a French School. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3. Zohra Dhrif used to eat croissant  at breakfast.  ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '4.	Zohra Dhrif didn’t fail at her 6th grade exam',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• the text is about: ',
                        answers: [
                            '1- a.	The primary school memories of Zohra Drif.',
                            '2- The post-independence life of Zohra Dhrif',
                        ],
                        correctAnswer: '2- The post-independence life of Zohra Dhrif',
                    },
                    {
                        question: '•	The type of document is:',
                        answers: ['1- an excerpt from a play', '2- excerpt from a memoir'],
                        correctAnswer: '2- excerpt from a memoir',
                    },
                    {
                        question: '•  Zohrra Dhrif studied………………. at the university: ',
                        answers: ['1- law', '2- business'],
                        correctAnswer: '1- law',
                    },
                ],
            },

            //matching
            {
                type: 'matching',
                question: 'Match each paragraph in the text with the statement that summarises it.',
                answers: {
                    g1: [
                        '1-	paragraph 01',
                        '2- paragraph 02',
                        '3- paragraph 03',
                        '4-	paragraph 04',
                    ],
                    g2: [
                        'a- Zohra tries to cheer up her friend Rosalyne after her failure in the sixth grade.',
                        'b- Zohra realises that the French can never accept an “Arab” as their equal.',
                        'c- Zohra notices for the first time her difference with her European schoolmates.',
                        'd- Zohra passes her 6th grade entrance exam, whereas her friend Roselyne fails.',
                    ],
                },

                correctAnswer: ['1-c', '2-d', '3-a', '4-b'],
            },
        ],
    },

    // thired
    {
        id: 3,
        title: 'Sequence 01: The Worst Experience in my Life. part 01',
        cat: 'reading',
        audioUrl: 'audioReading_1',
        test: 'r-t-3',
        hint: 'After answering each activity, I write down the hints that helped me to predict the coming events.',
        text: [
            `Written by Ceyanne, `,
            ` I remember I was about 4 years old when my aunt brought a dog home and one day the dog completely turned on me and ripped my face. I started to heal before I began school, but I still have visible scars on my face. `,
            `During that time, I’ve never felt different; I had a very normal life and my family were very supportive. However, and after 2 years, …`,
        ],
        exp: 'sto heal: to get better, visible: clear',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	Ceyanne was attacked by a dog.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2.	All Ceyann’s scars were healed. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                ],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '•	After being attacked by the dog what do you think the next Ceyonne’s worst life experience is going to be about? ',
                        answers: [
                            '1- getting bullied',
                            '2- talking about how people treated her very nicely.',
                            '3- getting more health problems',
                        ],
                        correctAnswer: '1- getting bullied',
                    },
                    {
                        question: '•	Where do you think that this bad life experience happened?',
                        answers: [
                            '1- 1.	At home',
                            '2- At the primary school',
                            '3- At the street',
                        ],
                        correctAnswer: '2- At the primary school',
                    },
                ],
            },
        ],
    },

    //fourth
    {
        id: 4,
        title: 'Sequence 01: The Worst Experience in my Life. part 02',
        cat: 'reading',
        audioUrl: 'audioReading_1',
        test: 'r-t-4',
        hint: 'After answering each activity, I write down the hints that helped me to predict the coming events',
        text: [
            `I’ve started studying at primary school. At first, I’d noticed the other pupils were staring at me all the time. But then, and about my 2nd month at the school, I started to get called names like scare-face, ugly, hideous, stupid … etc. I thought they would stop, yet I was wrong. `,
            `Throughout …`,
        ],
        exp: 'a coach: is a type of bus for travelling long distances',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1. Ceyanne got bullied at the primary school ',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2. She was bullied for 5 years',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1. She asked for help during primary school.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '2. She has started feeling better after primary school.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                ],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '•	how do you think this would affect her personality?',
                        answers: [
                            '1- she would be stronger',
                            '2- she would lose self-confidence.',
                            '3- she would be aggressive.',
                        ],
                        correctAnswer: '2- she would lose self-confidence.',
                    },
                    {
                        question: '•	what do you think she would do?',
                        answers: [
                            '1.	she asked for her father’s help.',
                            '2- she decided to consult a therapist.',
                            '3- she asked for her classmates help.',
                        ],
                        correctAnswer: '1.	she asked for her father’s help.',
                    },
                ],
            },
        ],
    },

    //fifth
    {
        id: 5,
        title: 'Sequence 01: The Worst Experience in my Life. part 03',
        cat: 'reading',
        audioUrl: 'audioReading_5',
        test: 'r-t-5',
        hint: '',
        text: [
            `Throughout the whole 5 years at the elementary school, I’d never told anyone because I thought nobody would understand it. And after all these years, I have started losing my self-confidence. I saw all these beautiful girls I was going to school with and here I was, a four eyed scared faced girl that no one noticed. When people would tell me, I would be prettier If I didn’t have any scars on my face. I would try so hard to brush it off, but I just ended up crying and all they said was “I’m just saying”.`,
            `when I couldn’t hold it any longer, I cried to my father telling him everything I was going through and he told me “You’re the most beautiful girl I’ve ever seen. Trust God sweetheart and I promise everything will be fine. God is always with us; he endures with us what we go through; when you feel lonely, he will be there guiding us showing us that there’s more to beauty than just a good-looking face.`,
            `I felt pleased talking and listening to my father, so please don’t wait too long to tell someone about what you’re going through. You may think there’s nobody who will listen to you, but I promise you there are more people who share your sufferance. Reach out talk to someone and everything will be okay.`,
            `Adapted from:  https://www.noplace4hate.org/real-bullying-stories/`,
        ],
        exp: '',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	Ceyanne started comparing herself to others.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2. Her classmates words made her strong.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3. Ceyanne’s father helped her to feel better.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },
        ],
    },

    //six
    {
        id: 6,
        title: 'Sequence 02: My school ',
        cat: 'reading',
        audioUrl: 'audioReading_6',
        
        test: 'r-t-5',
        hint: 'What do you think the text is about? ',
        text: [
            `School has been the most amazing and the funniest time I admired in my life. So when I look back on my class souvenirs, I feel that I lost something very precious, something that is impossible to return back. My teachers, my classmates, my school and every single moment I lived there left special emotions and exceptional feelings on me.`,
            `I was lucky to have very respectful teachers who taught me sciences and important things in life, the hours I spent with them made from me a powerful person, they taught me to be self-confident, to believe in myself, to care for others, to be helpful, generous, courageous, perseverant, respectful and kind with others. Thanks to my teachers, I learnt plenty of moral values and good qualities. I was really affected by their personalities and behaviours. I remember Mr Talbi, my teacher of Arabic who has never been late or absent, he was known for his strictness, punctuality, rigor, sincerity and his mastery of work. This ideal man affected me and left a great impact on my personality, so I have always tried to be like him. Similarly, I will never forget my classmates Oussama, Yanis, Hani, Laid , Chafia and Bariza. They were my best friends since we spent unforgettable moments all together in our school. `,

            `“Freedom News” February 12th,2020 By : Faouzi HADDAD`,
        ],
        exp: '',
        questions: [
            // multiple choice
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '•	a.	the type of document is: ',
                        answers: [
                            '1- a newspaper article',
                            '2- a website article',
                            '3- an interview',
                        ],
                        correctAnswer: '1- a newspaper article',
                    },
                    {
                        question: '• Date of publication is on: ',
                        answers: [
                            '1.	the twentieth of February 2020',
                            '2- the twelfth of February 2020.',
                            '3-	the second of February 2020',
                        ],
                        correctAnswer: '2- the twelfth of February 2020.',
                    },
                    {
                        question: '• There are … in the text:  ',
                        answers: [
                            '1.	two paragraphs',
                            '2- three paragraphs',
                            '3-	four paragraphs',
                        ],
                        correctAnswer: '1.	two paragraphs',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	The author’s school has influenced his personality.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2. He has become unkind',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3. Mr Talbi taught him science. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '4. Mr Talbi is the author’s idol.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },

            //filling the gaps
            {
                type: 'fillingGaps',
                question: ' Read the text again and fill in the gaps with “ a. friends /b. learnt/c.  respectful/ d. never/ e. primary /f. taught “',
                answers: [
                    ' .	 “ I Have  ----- ./ .	“” forgotten my  ------ ./ .	school. I met many  ----- ./.	and teachers. They  ----- ./ me different school subjects. I have  -----./ to be a helpful and -----./ person.',
                ],
                correctAnswer: ['d', 'e', 'a', 'f', 'b', 'c'],
            },
        ],
    },

    //seven
    {
        id: 7,
        title: 'Sequence 02: My Primary school ',
        cat: 'reading',
        audioUrl: 'audioReading_7',
        
        test: 'r-t-7',
        hint: '',
        text: [
            `I was about six years old when my father took me to school for the first time. I remember all the children were lined up. After some time, a teacher called my name. and sent me to the classroom. I became nervous as all the children were unknown to me. But within a short time, I found a girl who was our neighbour. We talked and sat on the same bench. Then the teacher entered the room. When he started talking, I felt fine. The teacher was very friendly and everything passed well. In my school days, I had many friends. We used to gossip and play and sometimes fight over silly things. I had two best friends. They were very nice and loyal to me. Every teacher in my school liked us. Although, we weren't brilliant students but we respected our elders and loved our youngers. My childhood was really amazing. These primary school memories fulfil my heart of joy and happiness. It was one of the best moments of my life. `,

            `“Adapted from Emily’s diary`,
        ],
        exp: '',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	the author went to the school with his mother. .',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '2. the children were his friends',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3. the teacher was unfriendly. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '4.	The author had a good childhood.  ',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },

            //re-ordering
            {
                type: 'reOrdering',
                question: 'Read the text again and reorder the ideas. ',
                answers: [
                    '1- The author feels happy when he remembers his childhood memories.',
                    '2- The author went to the school with his father.',
                    '3- The author set with her neighbour on the bench.',
                    '4- The author had two best friends.',
                ],
                correctAnswer: ['2', '3', '4', '1'],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '•	The author was talking about: ',
                        answers: [
                            '1- Herprimary school',
                            '2- her high school ',
                            '3- the university ',
                        ],
                        correctAnswer: '1- Herprimary school',
                    },
                    {
                        question: '•	The author got angry because: ',
                        answers: [
                            '1.	Her father left her.',
                            '2- she didn’t know anyone.',
                            '3-	The teacher yelled at her.',
                        ],
                        correctAnswer: '2- she didn’t know anyone.',
                    },
                ],
            },

            //matching
            {
                type: 'matching',
                question: 'read the text again and match each word with its definition ',
                answers: {
                    g1: ['1- elders ', '2- forget ', '3- known ', '4-	sadness '],
                    g2: ['a- remember ', 'b- unknown', 'c- youngers ', 'd- happiness '],
                },

                correctAnswer: ['1-c', '2-a', '3-b', '4-d'],
            },
        ],
    },

    //eight
    {
        id: 8,
        title: 'Sequence 02: My Future Plans',
        cat: 'reading',
        audioUrl: 'audioReading_8',
        test: 'r-t-8',
        hint: '',
        text: [
            `Hello, Mark!`,
            `Thank you for asking me about my future job. Well, when I was a child, I dreamt of being a photographer because I used to like taking photos of friends and editing them. Then everything has changed since I visited a children hospital in my city. From that point, I decided to become a doctor to help people and stop their suffering.`,
            `As for now, I am concentrating my attention on finishing my studies at secondary school. Soon I will take the first important exam of my life - the baccalaureate exam. I won’t stop working hard until I pass. As you know, I’m good at English, math, biology and physics. So, if I get it with distinction, I‘ll study at the Medical University and my dreams may come true. I will try to get more information about that from my teachers and career counselors at my school who are very supportive, gentle and helpful.`,
            ` It is very hard to choose a career before you finish high school, but always keep in mind that it is important to follow your dream and be good at what you choose.`,
            `Best regards, `,
            `Paul`,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• the type of document is: ',
                        answers: [
                            '1- an email',
                            '2-	an excerpt from a book ',
                            '3- an interview ',
                        ],
                        correctAnswer: '1- an email',
                    },
                    {
                        question: '•	the text is about:',
                        answers: [
                            '1.	childhood memories ',
                            '2- an ideal friend ',
                            '3-	dream career',
                        ],
                        correctAnswer: '3-	dream career',
                    },

                    {
                        question: '•	The author is a student at: ',
                        answers: [
                            '1.	Primary school',
                            '2- Middle school ',
                            '3-	Secondary School',
                        ],
                        correctAnswer: '3-	Secondary School',
                    },

                    {
                        question: '•	What was the author’s former dream career?  ',
                        answers: [
                            '1.	a photographer',
                            '2- a businessman ',
                            '3-	an engineer ',
                        ],
                        correctAnswer: '1.	a photographer',
                    },

                    {
                        question: '•	what is his current dream career? ',
                        answers: ['1.	a photographer ', '2- a doctor', '3-	an architect  '],
                        correctAnswer: '2- a doctor',
                    },

                    {
                        question: '•	when has he changed his changed his mind?',
                        answers: [
                            '1.	before visiting hospitalized children',
                            '2- after visiting hospitalized children',
                            '3-	when he got sick.',
                        ],
                        correctAnswer: '2- after visiting hospitalized children',
                    },

                    {
                        question: '•	The author is good at: ',
                        answers: [
                            '1.	Biology, English, Physics',
                            '2- Biology, Physics, Geography',
                            '3-	Maths, Civic Education, English',
                        ],
                        correctAnswer: '1.	Biology, English, Physics',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	Paul is the sender of the email',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2.	The author’s teachers are unsupportive.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3.	It is easy to choose a career before finishing high school.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                ],
            },
        ],
    },

    //nine
    {
        id: 9,
        title: 'Sequence 02:  BELGACEM HABA',
        cat: 'reading',
        audioUrl: 'audioReading_9',
        test: 'r-t-9',
        hint: '',
        text: [
            `I’m Professor Belgacem Haba, an Algerian researcher in the field of electronics. I was born in 1975 in El M’ghayer, El Oued. I was a descent kid. I always stayed outside the school doing my homework. People thought I was homeless! I was staying in the freezing weather alone. At home, I studied under the light of a candle. I was punctual, ambitious and hardworking. `,
            `My parents helped me a lot and encouraged me to never give up, to be self-confident and work hard to turn my dreams into reality. Now that I’m one on the most successful researchers in the world, my advice for young students is to have a goal and work hard on it. Believe in yourself and never give up. I come from the desert, from one of the poorest villages where there was no electricity. I had an opportunity and I took it. So don’t miss opportunities!`,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• The name of the outstanding figure:  ',
                        answers: [
                            '1- Kateb Yacine',
                            '2-	Didouch Mourad ',
                            '3- Belkacem Haba',
                        ],
                        correctAnswer: '3- Belkacem Haba',
                    },
                    {
                        question: '•	Date of birth:',
                        answers: ['1.	1974', '2- 1975', '3-	1957'],
                        correctAnswer: '2- 1975',
                    },

                    {
                        question: '•	Place of birth: ',
                        answers: ['1.	Ouad Souf', '2- Biskara', '3-	Oran'],
                        correctAnswer: '1.	Ouad Souf',
                    },

                    {
                        question: '•	His job is ',
                        answers: ['1.	a journalist', '2- a researcher', '3-	a teacher'],
                        correctAnswer: '2- a researcher',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	Belkacem Haba was a punctual, decent and ambitious kid',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2.	He did not give up his dream.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '3.	He lived in a wealthy neighbourhood.  ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                ],
            },

            //filling the gaps
            {
                type: 'fillingGaps',
                question: ' Read the text again and fill in the gaps with: “a. born/ b. dream/ c. village/ d. ambitious”  ',
                answers: [
                    ' .	 Belkacem Haba was  ----- ./ .	in a small  ------ ./ .	He was a very  ----- ./.	kid. He worked so hard to realize his    ----- .',
                ],
                correctAnswer: ['a', 'a', 'd', 'b'],
            },
        ],
    },

    //ten
    {
        id: 10,
        title: 'Sequence 02:  Jennifer Bricker',
        cat: 'reading',
        audioUrl: 'audioReading_10',
        
        test: 'r-t-10',
        hint: '',
        text: [
            `Jennifer Bricker, an American acrobat , was born without legs, and her parents abandoned her. She was then adopted by the Brickers, who taught her not to say “I can’t.” As a child, Jennifer was active in sports and decided to do gymnastics seriously. And at the age of 11, she won the Power Tumbling Championship in Illinois and was ranked the 4th at the Junior Olympic Games. `,
            `She was fascinated by the American gymnast Dominque Moceanu, the gold medal winner at the 1996 Olympics. And at the age of 16, Jennifer discovered that her idol was actually her elder sister. And Jennifer reunited with her biological family. Later she participated in the Britney Spears Circus Tour.`,
            `Her history is detailed in her memoir Everything Is Possible: Finding the Faith and Courage to Follow Your Dreams, which was a New York Times bestseller. `,
            `https://brightside.me/wonder-people/10-people-who-made-their-childhood-dreams-come-true`,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• 	The type of document is: ',
                        answers: [
                            '1- an email',
                            '2-	a website article',
                            '3- a newspaper article',
                        ],
                        correctAnswer: '2-	a website article',
                    },
                    {
                        question: '•	The title is: ',
                        answers: [
                            '1.	Jennifer Bricker',
                            '2- My life',
                            '3-	Dominique Moceanu',
                        ],
                        correctAnswer: '1.	Jennifer Bricker',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	Jennifer was born without arms',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '2.	Her real parents were very supportive. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3.	She practises Gymnastics.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '4.	her sister is her idol.',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },

            //re-ordering
            {
                type: 'reOrdering',
                question: 'Reorder the following ideas based on the their occurrence on the text',
                answers: [
                    '1- Jennifer discovered that her idol is her actual sister.',
                    '2- she won the Power Tumbling Championship in Illinois',
                    '3- Jennifer was adopted.',
                    '4- Jennifer reunited with her biological parents. ',
                ],
                correctAnswer: ['3', '2', '1', '4'],
            },
        ],
    },

    //eleven
    {
        id: 11,
        title: 'Sequence 02: My Dream ',
        cat: 'reading',
        audioUrl: 'audioReading_11',
        videoUrl: '',
        test: 'r-t-11',
        hint: '',
        text: [
            `Ever since I can remember I’ve always wanted to be a doctor. My neighbours and I used to play doctors and nurses in my room till all of our teddies were cured and no more complaints were heard. Broken arm? No problem. I’ll give you an injection for the pain. Flu? Here’s some antibiotic and cough syrup. And so on…. My parents were proud and encouraged me to pursue a career as a doctor. `,
            `Of course, to be a doctor was not as easy as it seemed. At school, I was considered as a straight-A-swot. While other kids were playing or going to parties, I was either studying or sleeping so I could get up early in the morning to go to school. I was that careful. I remember studying till midnight. `,
            `When I was in my third year of university, I decided to volunteer at a local hospital as a male assistant (nurse). I heard people’s life stories and tried to relieve some of the pain away. `,
            `Now, I’m a doctor. I’ve never given up listening to my patients. People badly want someone to listen and share their burden. I’ve been doing that since my teddy bear childhood. `,
            `Mathew Lanel.`,
            `Adapted from www.ISL Collective .com`,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• 	The text is written by: ',
                        answers: ['1- Anonymous writer', '2-	Mathew Lanel'],
                        correctAnswer: '2-	Mathew Lanel',
                    },
                    {
                        question: '•	How many paragraphs in the text? ',
                        answers: [
                            '1.	two paragraphs',
                            '2- three paragraphs',
                            '3-	four paragraphs',
                        ],
                        correctAnswer: '3-	four paragraphs',
                    },
                    {
                        question: '•	what’s the text about?',
                        answers: [
                            '1.	Mathew’s first day at primary school',
                            '2-	Mathews dream of being a doctor',
                            '3-	Difficulties of being a doctor',
                        ],
                        correctAnswer: '3-	Difficulties of being a doctor',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	Mathew did not want to be a doctor when he was a child. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '2.	He volunteered as a male assistant at a hospital.  ',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '3.	He listens well to his patients. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },

            //filling the gaps
            {
                type: 'fillingGaps',
                question: ' Read the text again and fill in the gaps with “1. The swot/ 2. The volunteer/ 3. The doctor”',
                answers: [
                    ' .	 ----- / is a person who works in an origination without being paid \n.  ------ / is a person who is qualified to treat sick people. ----- / \n.	----- is a person who studies a lot. ',
                ],
                correctAnswer: ['2', '3', '1'],
            },
        ],
    },



    //therteen
    {
        id: 13,
        title: 'Sequence 02: My Primary School 01',
        cat: 'reading',
        audioUrl: 'audioReading_13',
        videoUrl: '',
        test: 'r-t-13',
        hint: 'Pre Reading: What do you think the text is about?',
        text: [
            `November 22,2011 by George Couros`,

            `Yesterday, I received a notification on Facebook that my old elementary school was soon to be demolished. I decided to write some of my memories about it. Leaving school almost 23 years ago, I was amazed how much my time at the school has influenced what I am doing today.`,

            `One of my first memories as a child was ….`,
        ],
        exp: '',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1. the school is going to be destroyed. ',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '2.	He is still a primary school pupil.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '3.	He is going to write some memories at the primary school',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                ],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• 	What do you think the first memory he is going to write about? then explain why',
                        answers: [
                            '1- His remarkable success in the final exam.',
                            '2-	his first day at the school.',
                        ],
                        correctAnswer: '2-	his first day at the school.',
                    },
                    {
                        question: '•	Which of the following hints you can rely on to predict?',
                        answers: [
                            '1.	the logical chronological order of the events.',
                            '2- Haphazardly',
                        ],
                        correctAnswer: '1.	the logical chronological order of the events.',
                    },
                    {
                        question: '•	who do you think he is going to go with to the school?',
                        answers: [
                            '1.	alone',
                            '2-	with his mother / father',
                            '3-	with his friends.',
                        ],
                        correctAnswer: '2-	with his mother / father',
                    },
                    {
                        question: '•	why do you think that his father/ mother took him to the school?',
                        answers: [
                            '1.	because it is obligatory',
                            '2-	Because my parents took me to the school on the first day.',
                        ],
                        correctAnswer: '2-	Because my parents took me to the school on the first day.',
                    },
                ],
            },
        ],
    },

    //foorteen
    {
        id: 14,
        title: 'Sequence 02: MY PRIMARY SCHOOL PART 02',
        cat: 'reading',
        audioUrl: 'audioReading_14',
        videoUrl: '',
        test: 'r-t-14',
        hint: '',
        text: [
            `My mom walking me to school for the first day. I still can visualize the jacket I was wearing and I still remember how much excited I felt. I kept talking nonstop all the way to the school.`,

            `I remember playing football in the school playground. we used to rush out and I remember my brother Alec always telling me how much I stunk from the sweat. I didn’t care because I could have played all day.`,

            `In the 3 rd grade , ….`,
        ],
        exp: '',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1. he went to the school with his father. false',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '2.	he was afraid to go to the school',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                ],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• 	what do you expect he is going to talk about next?',
                        answers: ['1- his ideal friend', '2-	his ideal teacher.'],
                        correctAnswer: '2-	his ideal teacher.',
                    },
                    {
                        question: '•	why does he consider him as an idol?',
                        answers: [
                            '1.	he was inspiring and supportive',
                            '2- he was careless and lazy.',
                            '2- He was strong.',
                        ],
                        correctAnswer: '1.	he was inspiring and supportive',
                    },
                ],
            },
        ],
    },

    //feefteen
    {
        id: 15,
        title: 'Sequence 02: MY PRIMARY SCHOOL PART 03',
        cat: 'reading',
        audioUrl: 'audioReading_15',
        videoUrl: '',
        test: 'r-t-15',
        hint: '',
        text: [
            `In the 3 rd grade, my teacher Mrs Penrose inspired a love of music that I still have. she wrote on my report card : « Follow your dreams as you have the talent to
      take you anywhere you want to go. » Mr. Moshinski isprobably one of the most influential teachers I have ever had. He was always hard on us, but it was done
      out of pure love. He used to sit and have some of the best conversations with us. They always meant so much to me.`,

            `Amazing that I can remember that much about elementary school. Hopefully my students will remember me as fondly. What I realize writing this is that it is never a building that is important, but people that make it feel like home.`,

            `Adapted from :https://georgecours.ca/blog`,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• 	What is the lesson George has learned?',
                        answers: [
                            '1- that the place is the most important thing.',
                            '2-	that the people that makes a place important.',
                        ],
                        correctAnswer: '2-	that the people that makes a place important.',
                    },
                    {
                        question: '•	Which one of the following paragraphs that best summarizes the text?',
                        answers: [
                            '1. George has realized that his primary school is going to be destroyed. Accordingly, he write his memories.',
                            '2- George went to the school with his mother. He met a lot of friends and studied different school subject',
                            '3- George decided to write some of his school memories after knowing that it is going to be destroyed. He talked about the first day at his primary school and his ideal teacher Mr. Moshinski. He also wishes that he would be as much good to his students as Mr. Moshinski.',
                        ],
                        correctAnswer: '3- George decided to write some of his school memories after knowing that it is going to be destroyed. He talked about the first day at his primary school and his ideal teacher Mr. Moshinski. He also wishes that he would be as much good to his students as Mr. Moshinski.',
                    },
                ],
            },
        ],
    },

    //sexteen
    {
        id: 16,
        title: 'Sequence 02: My best friend',
        cat: 'reading',
        audioUrl: 'audioReading_16',
        videoUrl: '',
        test: 'r-t-16',
        hint: '',
        text: [
            `Hello,`,
            `my name is Sami. I am very happy to tell you about my best friend. His name is Karim. He is15 years old. He is quite tall and slim. He has short hair and brown eyes.`,

            `He is cheerful and funny. He always tells jokes when we are together. He is also friendly and likes meeting new people. He is very helpful and unselfish. He
      always tries to help people who have problems. He is smart and hardworking. He  homework and is at the top of my class. Whenever we work together, I get good marks.`,

            `In his free time, he enjoys reading books. He always says that the more we read the more we learn. He likes playing football and basketball. He loves swimming too. We always go to the beach together.`,
            `In the future, Karim wants to be a good doctor. I am really happy to have such a friend.`,
            `What about you ? Can you tell me about your best friend ?`,
            `Best Regards, `,
            `Sami`,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• 	In the text there are:',
                        answers: [
                            '1- three paragraphs',
                            '2- four paragraphs',
                            '3- five paragraphs',
                        ],
                        correctAnswer: '2- four paragraphs',
                    },
                    {
                        question: '• 	The text is:',
                        answers: ['1- an article', '2- an email', '3- an interview'],
                        correctAnswer: '2- an email',
                    },
                    {
                        question: '• 	Read the following part and choose which paragraph it can be attached to: “When Cancer and was about to die. He suffered a lot and that what has made him to decide to be a skilful doctor. He wants to help sick people and to bring back the smile to their lives.”',
                        answers: [
                            '1- paragraph 01',
                            '2- paragraph 02',
                            '3- paragraph 03',
                            '4- paragraph 04',
                        ],
                        correctAnswer: '4- paragraph 04',
                    },
                ],
            },
        ],
    },

    //seventeen
    {
        id: 17,
        title: 'Sequence 02: Manuela',
        cat: 'reading',
        audioUrl: 'audioReading_17',
        videoUrl: '',
        test: 'r-t-17',
        hint: '',
        text: [
            `Hello,`,
            `My name is Paola. When I was a child I was a very shy girl. My family and I lived in a small village in Oaxaca, Mexico.`,

            `I remember my best friend at elementary school, Manuela. When we met she was eight years old and I was nine. She was a beautiful girl. She was tall and plumb with long wavy hair and big hazel eyes. We were in the same class at school. We sat together and always played in the break, we call it recreo here in Mexico. Her family was very nice and they lived near my house, so we spent a lot of time together.`,

            `watched cartoons on TV , we played games, and did our homework together. In summer we were together too, we went swimming in the river when the weather was hot, we played with our toys, and played video games a lot – our favorite game was Mario Bros.`,
            `I remember the day when she broke her leg , that day we were running and jumping in the hill. I remember also the day while she was sleeping on the soil and I was digging a hole, and suddenly a big black dog appeared and we started shouting and crying. I will never forget the time we spent together.`,
            `I will never forget how careful, helpful , joyful and bountiful she was.`,
            `What about you ? Can you tell me about your childhood memories ?`,
            `Sincerely ,`,
            `Pola`,
            `Adapted from ISL.COLLECTIVE.COM`,
        ],
        exp: '',
        questions: [
            // true false
            {
                type: 'trueFalse',
                list: [{
                    question: '1.	the text is an email.',
                    answers: ['True', 'False'],
                    correctAnswer: 'True',
                }, ],
            },

            //matching
            {
                type: 'matching',
                question: 'read the text again and match each word with its definition ',
                answers: {
                    g1: [
                        '1- salutation',
                        '2- introduction',
                        '3- body',
                        '4-	conclusion',
                        '4-	closure',
                    ],
                    g2: [
                        'a- hello',
                        'b- Sincerely',
                        'c- My name is …',
                        'd- I will never forget …',
                        'd- I remember my best friend…',
                    ],
                },

                correctAnswer: ['1-a', '2-c', '3-e', '4-d', '5-b'],
            },

            //re-ordering
            {
                type: 'reOrdering',
                question: 'Reorder the following ideas based on the their occurrence on the text',
                answers: [
                    '1- Manuela is a helpful person',
                    '2- Manuela had long wavy hair and big hazel eyes.',
                    '3- Manuella and Poala used to swim in the river.',
                    '4- they used to watch cartoons.',
                ],
                correctAnswer: ['2', '3', '4', '1'],
            },
        ],
    },

    //eighteen
    {
        id: 18,
        title: 'Sequence 02: Flashbacks',
        cat: 'reading',
        audioUrl: 'audioReading_18',
        videoUrl: '',
        test: 'r-t-18',
        hint: '',
        text: [
            `November 22,2011 by George Couros`,
            `Yesterday, I received a notification in Facebook that my old elementary school was soon to be demolished. I decided to write some of my memories about it. almost 23 years ago, I was amazed how much my time at the school has influenced what I am doing today.`,
            `One of my first memories as a child was my mom walking me to school for the first day. I still can visualize the jacket I was wearing. I remember playing football the fields with James, Antoine and John. we used to rush out and I remember my brother Alec always telling me how much I stunk from the sweat. I didn’t care because I could have played all day.`,
            `In grade 3, my teacher Mrs Penrose inspired a love of music that I still have. she wrote on my report card : «Follow your dreams as you have the talent to take you anywhere you want to go. »Mr. Moshinski is probably one of the most influential teachers I have ever had.He was always hard on us, but it was done out of pure love. He used to sit and have some of the best conversations with us. They always meant so much to me.`,
            `Amazing that I can remember that much about elementary school. Hopefully my students will remember me as fondly. What I realize writing this is that it is never a building that is important, but people that make it feel like home.`,
            `Adapted from: https://georgecours.ca/blog`,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '•	what is the type of the document:',
                        answers: [
                            '1- an email',
                            '2- a blog article',
                            '3- a newspaper article',
                        ],
                        correctAnswer: '2- a blog article',
                    },
                    {
                        question: '•	what is the title:',
                        answers: [
                            '1- My school Memories',
                            '2- My Childhood memories',
                            '3- My Demolished school',
                        ],
                        correctAnswer: '1- My school Memories',
                    },
                    {
                        question: '•	How many paragraphs in the text?',
                        answers: ['1- 2 paragraphs', '2- 3 paragraphs ', '3- 4 paragraphs'],
                        correctAnswer: '3- 4 paragraphs',
                    },
                    {
                        question: '•	what is the date of publication:',
                        answers: [
                            '1- the second of November 2011',
                            '2- the twenty second of November 2011',
                            '3- the twelfth of November 2011',
                        ],
                        correctAnswer: '2- the twenty second of November 2011',
                    },
                    {
                        question: '•	who is the author?',
                        answers: ['1- George', '2- Alec', '3- James'],
                        correctAnswer: '1- George',
                    },
                ],
            },

            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                    question: '•	Which paragraph that misses this part? “ I was very excited and curious at the same time. I kept talking non-stop all the way to the school and my mother was very calm answering me each now and then.”',
                    answers: [
                        '1- paragraph 01',
                        '2- paragraph 02',
                        '3- paragraph 03',
                        '4- paragraph 04',
                    ],
                    correctAnswer: '2- paragraph 02',
                }, ],
            },

            //re-ordering
            {
                type: 'reOrdering',
                question: 'Reorder the following ideas based on the their occurrence on the text',
                answers: [
                    '1- The first day at primary school.',
                    '2- hoping that his students will remember him',
                    '3- realizing that the primary school is going to be demolished',
                    '4- talking about his ideal teacher.',
                    '5- playing with his friends.',
                ],
                correctAnswer: ['3', '1', '5', '4', '2'],
            },
        ],
    },

    //twelve
    {
        id: 19,
        title: 'Sequence 03: a good citizen ',
        cat: 'reading',
        audioUrl: 'audioReading_12',
        videoUrl: '',
        test: 'r-t-12',
        hint: '',
        text: [
            `Well, it’s not easy to answer this question, but let’s agree that if you want to be a good citizen, you have to be a good person first. A good person who is aware of his duties and responsibilities towards his family, his friends, his neighbors and his community in general. A good citizen knows his rights, too, but his rights should never violate the rights of others. Respecting other people’s opinion, beliefs, religion, the way they dress, the way they think is an important part of being a good citizen. `,

            `In addition, everybody knows that the main point of being a good citizen is giving helping hand to homeless and poor people. We should help everyone no matter what color, race or religion they have. The best way to help them is to donate food and money so that they don’t go hungry. There are many charities and organizations that help the needy people but every one of us should volunteer to give them a better life.`,
            `I, also strongly believe that a good citizen respect and obey the rules and the laws. Laws are set up to regulate people’s behavior and to protect our general safety and to ensure our rights as citizens against abuses by the others. `,
            `to sum up, I agree that citizenship is a huge responsibility and a burden on the shoulder of every faithful and selfless citizen in his country. `,
        ],
        exp: '',
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '• 	The text is about: ',
                        answers: ['1- poor people', '2-	citizenship', '3-	cooperative work'],
                        correctAnswer: '2-	citizenship',
                    },
                    {
                        question: '•	the text is: ',
                        answers: ['1.	argumentative', '2- descriptive', '3-	expository'],
                        correctAnswer: '1.	argumentative',
                    },
                    {
                        question: '•	3.	A good citizen knows:',
                        answers: [
                            '1.	his duties or rights ',
                            '2-	neither his duties nor his rights',
                            '3-	his rights and dutie',
                        ],
                        correctAnswer: '3-	his rights and dutie',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1. A good citizen is a person who cares only about his family.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '2.	A good citizen has principles, morals and ethics',
                        answers: ['True', 'False'],
                        correctAnswer: 'True',
                    },
                    {
                        question: '3.	we should help only needy people who share with us the same ideas, beliefs and religion.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                    {
                        question: '4.	A respectful citizen should break and disobey the rules and the laws.',
                        answers: ['True', 'False'],
                        correctAnswer: 'False',
                    },
                ],
            },

            // true false
            {
                type: 'trueFalse',
                list: [{
                        question: '1.	 Does the development of nations depend on the behavior of its people?',
                        answers: ['Yes', 'No'],
                        correctAnswer: 'Yes',
                    },
                    {
                        question: '2.	is it acceptable to violate the rights of others? ',
                        answers: ['Yes.', 'No.'],
                        correctAnswer: 'No.',
                    },
                ],
            },

            //matching
            {
                type: 'matching',
                question: 'read the text again and match each word with its definition ',
                answers: {
                    g1: ['1-	1.	needy ', '2- volunteer ', '3- charity', '4-	donate'],
                    g2: [
                        'a- To give money or goods to help a person or organization.',
                        'b- A person who offers help without getting help.',
                        'c- someone who is poor, or someone who demands a lot of care and attention.',
                        'd- Generosity and helpfulness especially toward the needy or suffering people.',
                    ],
                },

                correctAnswer: ['1-c', '2-b', '3-d', '4-a'],
            },
        ],
    },

    // 19
    {
        id: 20,
        title: 'Sequence 03: Citizenship',
        cat: 'reading',
        audioUrl: 'audioReading_18',
        videoUrl: '',
        test: 'r-t-18',
        hint: 'burden: a significant responsibility ',
        text: [
            `It is very important to be a good citizen because the development of a nation or a country depends mainly on the activities and behaviors of its citizens. The question that frequently comes to my mind is, how can someone be a good citizen?`,
            `Well, it's not easy to answer this question, but let's agree that if you want to be a good citizen, you have to be a good person first. A good person is aware of their duties and responsibilities towards their family, friends, neighbors, and the community in general. A good citizen also knows their rights, but those rights should never violate the rights of others. Respecting other people's opinions, beliefs, religion, the way they dress, and the way they think is an important part of being a good citizen.`,
            `In addition, it is widely recognized that a key aspect of being a good citizen is extending a helping hand to homeless and poor people. We should help everyone, regardless of their color, race, or religion. The best way to assist them is by donating food and money to ensure they do not go hungry. While there are many charities and organizations dedicated to helping those in need, each one of us should volunteer to contribute to giving them a better life.`,
            `I strongly believe that a good citizen respects and obeys the rules and laws. Laws are established to regulate people's behavior, protect our general safety, and ensure our rights as citizens are safeguarded against abuses by others. In summary, citizenship is a significant responsibility and burden placed upon every faithful and selfless citizen in their country.`,


        ],
        exp: `Let's Learn to Summarize, Write your own summary at the end of the session.`,
        questions: [
            //multiple choice
            {
                type: 'multipleChoice',
                list: [{
                        question: '•	Select the sentence that you can omit from the text. ',
                        answers: [
                            '1- A good citizen knows his rights and duties.',
                            `2- A good citizen's rights should respect other people's opinions, beliefs, and the way they think.`,
                        ],
                        correctAnswer: `2- A good citizen's rights should respect other people's opinions, beliefs, and the way they think.`
                    },
                    {
                        question: '•	Select a sentence you can omit from the text.',
                        answers: [
                            `1- Laws are set up to regulate people's behavior and protect general safety.`,
                            'We should help everyone, no matter what color, race, or religion they have.',

                        ],
                        correctAnswer: 'We should help everyone, no matter what color, race, or religion they have.',
                    },

                    {
                        question: '•	Select a sentence you can omit from the text.',
                        answers: [
                            `1- Laws are set up to regulate people's behavior and protect general safety.`,
                            '2- A good citizen should respect and obey the rules and laws.',

                        ],
                        correctAnswer: `1- Laws are set up to regulate people's behavior and protect general safety.`,
                    },

                ],
            },

            //matching
            {
                type: 'matching',
                question: 'Match each paragraph with its main idea.',
                answers: {
                    g1: [
                        '1-	Paragraph 01',
                        '2- Paragraph 02',
                        '3- Paragraph 03',
                        '4-	Paragraph 04',
                        '5-	Paragraph 05',
                    ],
                    g2: [
                        'a- The importance of being a good citizen and its impact on national development.',
                        'b- Citizenship is a huge responsibility.',
                        'c- The significance of helping homeless and poor people, regardless of their background.',
                        'd- being aware of his rights and duties.',
                        'e- The importance of respecting and obeying laws for the well-being of society.',
                    ],
                },

                correctAnswer: ['1-a', '2-d', '3-c', '4-e', "5-b"],
            },


        ],
    },
];