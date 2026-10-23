
        // Sample Custom Data (Stored locally or loaded dynamically)
        const samplePhotos = [
            {
                url: 'https://imgur.com/z56NgmZ.jpg',
                title: 'আমাদের প্রথম ঘোরার দিন 🌸',
                caption: 'সেই যে মুক্তিযোদ্ধা পার্কটিতে আমরা একসাথে বসে আমাদের দ্বিতীয় বার দেখা হয়েছিল, দিন টা ‍সত্যি অনেক স্মৃতিময় আমার কাছে। প্রথম দিনের ছবি আমার কাছে নেই তাই এই দিনটা কেই আমি প্রথম দিন মনে করি, সেদিনই প্রথম আমরা একসাথে হাত ধরে হেঁটেছি - হুট ছাড়া রিক্সায় ঘুরেছি স্নিগ্ধ অসাধারণ।'
            },
            {
                url: 'https://imgur.com/sw8eslg.jpg',
                title: 'হাতে হাত রেখে হাঁটা 🤝',
                caption: 'কী অদ্ভুত ছিল সেই অনুভূতি, একই পথে হাঁটছিলাম দুজন, অথচ মনে হচ্ছিল আমি যেন জীবনের সবচেয়ে সুন্দর একটা পথে হাঁটছি।'
            },
            {
                url: 'https://imgur.com/hcWGQ0T.jpg',
                title: 'পাগলামির মুহূর্ত 🤣',
                caption: 'আমার এই পাগলামি বা এই ইচ্ছাটা আমার সবচাইতে আনন্দ হতো যে তোমাকে ফুলসহ আস্ত একটা গাছ দিয়ে দি। আর কিছুদিন থাকলে তোমার বাসা গাছ দিয়ে ভরে যেত হয়তো 🤣'
            },
            {
                url: 'https://imgur.com/gr71kdZ.jpg',
                title: 'বাবু অর্পা👩🏻‍🦰',
                caption: 'এইটুকু থাকতে তোমার সাথে আমার পরিচয়। হয়তো আরো অনেক ছোট ছিলে। আমার কাছে পুরনো এই ছবিটাই শুধু আছে এবং এটা আমি সবসময়ের জন্যই রেখে দিতাম। ছবিটা খুব সুন্দর আর ইন্টারেস্টিং ব্যাপার হচ্ছে তুমি তখন ওড়নাও পড়তে না। এত ছোট বাচ্চা তখন তুমি।'
            },
            {
                url: 'https://imgur.com/KmJAeb7.jpg',
                title: 'রঙিন পরিবর্তন🌈',
                caption: 'আমরা খুব পরিত্যক্ত ময়লা একটা ঘরে উঠেছিলাম। বলতে গেলে একটা খুবই নোংরা কিচেন। আমাদের কিচ্ছু ছিল না আমাদের শুরুটা খুবই ভিন্ন ছিল। ধীরে ধীরে অনেক কিছু বদলাতে লাগলো। সাথে আমাদের ঘরের রং ও বদলালো। সবকিছু যেন খুব রঙিন লাগছিল মনে হচ্ছিল জীবনে রং ফিরে পাচ্ছি। খুব রঙিন লাগছিল অনেক আনন্দ হয়েছিল আমার। ভালো হয়েছে তুমি ছবিটা তুলেছিলে, স্মৃতি হয়ে থাকবে ❤️'
            },
            {
                url: 'https://imgur.com/0jwaANZ.jpg',
                title: 'রিলাক্সেসেশন🤣',
                caption: 'দেখো দেখতে কি সুন্দর লাগতেছে☺️, তুমি আমার বুকের উপর পারা দিয়ে বসে আছো আরাম করে। আমিও আরাম করে ল্যাপটপ দেখছি। কারো কোন অভিযোগ নাই। খুব সুন্দর না?  আহারে দুস্থ রায়হান 🤣'
            },
            {
                url: 'https://imgur.com/WrtJqTu.jpg',
                title: 'তোমার মিষ্টি হাসি 😊',
                caption: 'তুমি খুব সুন্দর, কি সুন্দর হাসতে পারো, অনেক হাসি কেড়ে নিয়েছি। এত সুন্দর মিষ্টি  হাসি দেখলেই কেমন খুশি খুশি লাগে বাবা। আহ্ কি সুন্দর মিষ্টি হাসি তোমার।  মাশাআল্লাহ ❤️ বাবা, সবসময় এভাবেই তুমি হাসবা ঠিক আছে?'
            },
            {
                url: 'https://imgur.com/QzFwMHr.jpg',
                title: 'আড্ডা ☕',
                caption: 'চারপাশ যখন নিস্তব্ধ, শহরটা যখন ঘুমিয়ে, তখন শুধু আমাদের গল্প, হাসি আর একসাথে কাটানো সেই ছোট্ট সময়টুকুই যেন পুরো পৃথিবী হয়ে ছিল। সেই রাতের উষ্ণতা হয়তো শীতের চেয়েও বেশি সুন্দর ছিল। ❤️'
            },
            {
                url: 'https://imgur.com/MlkwIVv.jpg',
                title: 'আমার সুন্দরী টা 🫶',
                caption: 'আমার রানী তুমি 👑 চিরকাল এভাবেই আমার হৃদয়ে থাকবে।'
            }
        ];

        const sampleMoments = [
       
            {
                date: 'বৃষ্টি #২',
               title: 'বৃষ্টিতে ভিজা বিকেল 🌧️',
                preview: 'হুট করে আসা বৃষ্টিতে আমাদের ভিজা ',
                secret: 'সেদিন বুঝেছিলাম, তোমার সাথে ছোট ছোট মুহূর্তগুলোও কতটা অদ্ভুত সুন্দর হতে পারে।'
            },
          
            {
                date: 'Feelings #2',
                title: 'Feelings',
                preview: 'অনন্ত নিস্তব্ধতার গ্রাসে হারিয়ে গেছে হৃদয়ের সমস্ত অনুরণন।',
                secret: 'অনন্ত নিস্তব্ধতার গ্রাসে হারিয়ে গেছে হৃদয়ের সমস্ত অনুরণন। ভেতরের মনস্তাপ আর দীর্ঘশ্বাসের দাহে নিঃশেষ হয়ে যাচ্ছে অস্তিত্বের শেষ তন্তুটুকুও, অথচ বাইরের এই নিষ্প্রাণ খোলস দেখে কেউ ঘুণাক্ষরেও টের পাবে না—ভেতরে কতটা ধ্বংসস্তূপ জমে আছে। যে আস্থার সৌধ আমি গড়েছিলাম নিজের রক্ত-ঘামে, তা আজ প্রতারণার কষাঘাতে ধূলিসাৎ। মূল্যহীনতার এই বিষাক্ত অনুভব বুক চিরে এক অলক্ষ্য রক্তক্ষরণ ঘটায়, যার কোনো দৃশ্যমান ক্ষত নেই, অথচ যার যন্ত্রণা মৃত্যুর চেয়েও অধিক তীব্র ও দীর্ঘস্থায়ী। বিশ্বাসঘাতকতার তীক্ষ্ণ শুর ভেদ করে গেছে আত্মমর্যাদার শেষ প্রাচীর। যে হৃদয়ে অর্ঘ্য সাজিয়েছিলাম নিষ্ঠার সাথে, সেখানে আজ কেবল অবহেলা ও পদাঘাত। জীবনের এই সায়াহ্নে এসে বুঝলাম—আমার নিঃশর্ত নিবেদন ছিল কেবল এক অলীক বিভ্রান্তি আমার অন্তর্দাহের শব্দ কোনো কোলাহলে রূপান্তরিত হয় না, তা কেবল মনস্তাপের নির্জনতায় গুমরে মরে। ক্ষতের গভীরে যে বিষাদ জমেছে, তা হয়তো কোনোদিন কোনো প্রতিভাষায় রূপান্তরিত হবে না; কেবল এক অবদমিত নিস্তব্ধতা হয়ে থেকে যাবে আয়ুর শেষ অধ্যায় পর্যন্ত।'
            }
        ];

        const loveLetterContent = `আমার প্রিয়তমা,
     শুভ জন্মদিন, আমার জীবনের সবচেয়ে সুন্দর অধ্যায়।

আজকের এই বিশেষ দিনে সব কিছুর ওপরে আমার একটাই প্রার্থনা—তুমি যেখানেই থাকো, যেমনই থাকো, সবসময় অনেক ভালো থাকো এবং হাসিখুশি থাকো। তোমার মুখের ওই হাসিটুকু ছিল আমার জীবনের সবচেয়ে বড় প্রাপ্তি, আর আজ অন্তরের গভীর থেকে আমার কেবল এই দোআই থাকবে যেন তোমার দিনগুলো অনাবিল আনন্দে কাটে। তুমি আমার ওপর অগাধ অভিমান আর অভিযোগ নিয়ে দূরে সরে গেছ। আমি জানি, আমার ভুলের কারণেই তোমার হৃদয়ে গভীর ক্ষত তৈরি হয়েছে। সেই কষ্ট বা অভিমান—কোনোটাই মিথ্যা নয়। তবে আজকের এই বিশেষ দিনে তোমাকে শুধু এতটুকুই জানাতে চাই—আমার হৃদয়ে তোমার প্রতি ভালোবাসা ও শ্রদ্ধাবোধের একবিন্দু ঘাটতি হয়নি, আর কোনোদিন হবেও না। তুমি আমাকে জীবনের যে সুন্দর মুহূর্তগুলো দিয়েছ, সেগুলো আমার সারাজীবনের সবচেয়ে মূল্যবান সম্পদ। তোমার প্রতি আমার কোনো ক্ষোভ বা অভিযোগ নেই- আছে কেবল নিজের ব্যর্থতার গভীর অনুশোচনা আর তোমার জন্য এক নির্মল ভালোবাসা।
আমার হৃদয়ের যে স্থানটি তোমার, সেখানে অন্য কেউ কোনোদিন পৌঁছাতে পারবে না। তোমার সব সুখ, শান্তি এবং সাফল্যের জন্য আমার মন থেকে সবসময় দোয়া থাকবে। সবসময় নিজের যত্ন নিয়ো, ভালো থেকো ।❤️`;

        // Local Storage Initialization
        function initData() {
            if(!localStorage.getItem('gf_photos')) {
                localStorage.setItem('gf_photos', JSON.stringify(samplePhotos));
            }
            if(!localStorage.getItem('gf_moments')) {
                localStorage.setItem('gf_moments', JSON.stringify(sampleMoments));
            }
            if(!localStorage.getItem('gf_letter')) {
                localStorage.setItem('gf_letter', loveLetterContent);
            }
        }

        // Render Photo Gallery
        function renderPhotos() {
            const photos = JSON.parse(localStorage.getItem('gf_photos'));
            const container = document.getElementById('gallery-container');
            container.innerHTML = photos.map((photo, index) => `
                <div onclick="openModal('${photo.url}', '${photo.title}', '${photo.caption}')" class="glass-card rounded-xl overflow-hidden cursor-pointer group hover:border-rose-400/50 transition-all duration-300">
                    <div class="h-64 sm:h-80 overflow-hidden relative">
                        <img src="${photo.url}" alt="${photo.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                            <span class="text-xs text-rose-200 font-semibold">Click For Details 🔍</span>
                        </div>
                    </div>
                    <div class="p-3">
                        <h4 class="font-semibold text-xs sm:text-sm text-rose-200 truncate">${photo.title}</h4>
                    </div>
                </div>
            `).join('');
        }

        // Render Memory Cards
        function renderMoments() {
            const moments = JSON.parse(localStorage.getItem('gf_moments'));
            const container = document.getElementById('moments-container');
            container.innerHTML = moments.map((moment, index) => `
                <div class="glass-card p-4 rounded-xl space-y-2 hover:border-purple-400/40 transition-all">
                    <div class="flex justify-between items-center text-xs text-purple-300 font-semibold">
                        <span>${moment.date}</span>
                        <i class="fa-solid fa-sparkles"></i>
                    </div>
                    <h3 class="font-bold text-base text-slate-100">${moment.title}</h3>
                    <p class="text-xs sm:text-sm text-slate-300">${moment.preview}</p>
                    
                    <div id="secret-${index}" class="hidden pt-2 border-t border-purple-500/20 text-xs sm:text-sm text-pink-300 italic">
                        " ${moment.secret} "
                    </div>
                    
                    <button onclick="toggleSecret(${index})" class="text-xs text-purple-400 font-bold hover:underline pt-1 flex items-center space-x-1">
                        <span id="btn-text-${index}">Click For Secret</span>
                        <i class="fa-solid fa-chevron-down text-[10px]"></i>
                    </button>
                </div>
            `).join('');
        }

        // Toggle Secret Text
        function toggleSecret(index) {
            const secretElem = document.getElementById(`secret-${index}`);
            const btnText = document.getElementById(`btn-text-${index}`);
            if(secretElem.classList.contains('hidden')) {
                secretElem.classList.remove('hidden');
                btnText.innerText = 'Hide';
            } else {
                secretElem.classList.add('hidden');
                btnText.innerText = 'Click To Open Secret';
            }
        }

        // Switch View Tabs
        function switchTab(tabName) {
            const tabs = ['hero', 'photos', 'moments', 'letter'];
            tabs.forEach(tab => {
                const sec = document.getElementById(`${tab}-section`);
                const nav = document.getElementById(`nav-${tab}`);
                if(tab === tabName) {
                    sec.classList.remove('hidden');
                    if(nav) {
                        nav.classList.add('text-rose-400');
                        nav.classList.remove('text-slate-400');
                    }
                } else {
                    sec.classList.add('hidden');
                    if(nav) {
                        nav.classList.remove('text-rose-400');
                        nav.classList.add('text-slate-400');
                    }
                }
            });
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Modal Handler
        function openModal(url, title, desc) {
            document.getElementById('modal-img').src = url;
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-desc').innerText = desc;
            document.getElementById('photo-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('photo-modal').classList.add('hidden');
        }

        // Letter Envelope and Typewriter Animation
        let isTyped = false;
        function openLetter() {
            document.getElementById('envelope-card').classList.add('hidden');
            const paper = document.getElementById('letter-paper');
            paper.classList.remove('hidden');
            
            

            if (!isTyped) {
                isTyped = true;
                const text = localStorage.getItem('gf_letter') || loveLetterContent;
                let i = 0;
                const target = document.getElementById('typewriter-text');
                target.innerHTML = '';
                
                function typeNextChar() {
                    if (i < text.length) {
                        const char = text.charAt(i);
                        if(char === '\n') {
                            target.innerHTML += '<br>';
                        } else {
                            target.innerHTML += char;
                        }
                        i++;
                        setTimeout(typeNextChar, 35);
                    }
                }
                typeNextChar();
            }
        }

        // audio file added 
      let isPlaying = false;
const bgAudio = document.getElementById('bgAudio');

function toggleAudio() {
    const icon = document.getElementById('music-icon');
    const text = document.getElementById('music-text');

    if (!bgAudio) {
        alert("Audio element khuje paoa jacche na!");
        return;
    }

    if (!isPlaying) {
        bgAudio.play().then(() => {
            isPlaying = true;
            if (icon) icon.className = "fa-solid fa-volume-high text-rose-400 animate-pulse";
            if (text) text.innerText = "Music: ON 🎶";
        }).catch(error => {
            console.log("Autoplay error:", error);
            alert("Gan play kora jacche na! Audio file path ba link thik ache kina check korun.");
        });
    } else {
        bgAudio.pause();
        isPlaying = false;
        if (icon) icon.className = "fa-solid fa-music text-rose-400";
        if (text) text.innerText = "Music: OFF";
    }
}

        // Background Animation (Hearts and Stars Canvas)
        function initCanvas() {
            const canvas = document.getElementById('canvas-bg');
            const ctx = canvas.getContext('2d');
            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;

            window.addEventListener('resize', () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            });

            const particles = Array.from({ length: 30 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 12 + 8,
                speedY: Math.random() * 0.8 + 0.3,
                opacity: Math.random() * 0.6 + 0.2,
                type: Math.random() > 0.4 ? 'heart' : 'star'
            }));

            function drawHeart(x, y, size, color) {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = color;
                const topCurveHeight = size * 0.3;
                ctx.moveTo(x, y + topCurveHeight);
                ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
                ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
                ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
                ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);

                particles.forEach(p => {
                    p.y -= p.speedY;
                    if (p.y < -20) {
                        p.y = height + 20;
                        p.x = Math.random() * width;
                    }

                    if (p.type === 'heart') {
                        drawHeart(p.x, p.y, p.size, `rgba(244, 63, 94, ${p.opacity})`);
                    } else {
                        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size / 4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });

                requestAnimationFrame(animate);
            }

            animate();
        }

        // Initialize App on Page Load
        window.onload = function() {
            initData();
            renderPhotos();
            renderMoments();
            initCanvas();
        };
    