
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
                url: 'https://imgur.com/cilYLdc.jpg',
                title: 'পাগলামির মুহূর্ত 🤣',
                caption: 'আমার এই পাগলামি বা এই ইচ্ছাটা আমার সবচাইতে আনন্দ হতো যে তোমাকে ফুলসহ আস্ত একটা গাছ দিয়ে দি। আর কিছুদিন থাকলে তোমার বাসা গাছ দিয়ে ভরে যেত হয়তো 🤣'
            },
            {
                url: '',
                title: 'তোমার মিষ্টি হাসি 😊',
                caption: ''
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
                date: 'মজাদার মুহূর্ত #১',
                title: 'সেই প্রথম রান্নার ব্যর্থ চেষ্টা! 🍳',
                preview: 'যেদিন আমরা দুজন মিলে রান্না করতে গিয়ে প্রায় পুরো কিচেন ধোঁয়াচ্ছন্ন করে ফেলেছিলাম...',
                secret: 'কিন্তু তাও তোমার বানানো খাবারটি আমার খাওয়া জীবনের সবচাইতে সুস্বাদু খাবার ছিল!'
            },
            {
                date: 'স্মরণীয় মুহূর্ত #২',
                title: 'বৃষ্টিতে ভিজা বিকেল 🌧️',
                preview: 'হুট করে আসা বৃষ্টিতে আমাদের ভিজা আর এক ছাতার নিচে আশ্রয় নেওয়া...',
                secret: 'সেদিন বুঝেছিলাম, তোমার সাথে ছোট ছোট মুহূর্তগুলোও কতটা অদ্ভুত সুন্দর হতে পারে।'
            },
            {
                date: 'মিষ্টি ঝগড়া #৩',
                title: 'কোথায় খাওয়া হবে তাই নিয়ে ঝগড়া! 🍕',
                preview: 'ঘন্টার পর ঘন্টা আলোচনা করেও আমরা ঠিক করতে পারি না কোন রেস্টুরেন্টে যাবো...',
                secret: 'শেষ পর্যন্ত কিন্তু ফুচকা খেয়েই আমরা সবচেয়ে বেশি খুশি হই!'
            }
        ];

        const loveLetterContent = `আমার প্রিয়তমা,
        
শুভ জন্মদিন! আজকের এই বিশেষ দিনে তোমাকে অনেক অনেক ভালোবাসা আর শুভকামনা জানাই। 

তুমি আমার জীবনে আসার পর থেকে সবকিছু যেন এক নতুন আলোয় রূপ নিয়েছে। তোমার একটুখানি হাসি আমার পুরো দিনটাকে সুন্দর করে তোলার জন্য যথেষ্ট। 

ঈশ্বর তোমাকে সবসময় হাসিখুশি রাখুক, তোমার সব স্বপ্ন পূরণ করুক। আমি চিরকাল তোমার পাশে থাকতে চাই, তোমার হাতে হাত রেখে জীবনের পথ চলতে চাই।

আমার জীবনের সেরা উপহার হওয়ার জন্য তোমাকে ধন্যবাদ। খুব ভালোবাসি তোমাকে! ❤️`;

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
            
            document.getElementById('letter-date').innerText = new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });

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

        // Web Audio API Synthesizer for Relaxing Background Melody (No external links needed!)
        let audioCtx = null;
        let isPlaying = false;
        let melodyInterval = null;

        function playRomanticMelody() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }

            const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23]; // C4, E4, G4, C5, A4, F4
            let step = 0;

            melodyInterval = setInterval(() => {
                if (!isPlaying) return;

                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(notes[step % notes.length], audioCtx.currentTime);

                gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start();
                osc.stop(audioCtx.currentTime + 1.2);

                step++;
            }, 600);
        }

        function toggleAudio() {
            const icon = document.getElementById('music-icon');
            const text = document.getElementById('music-text');

            if (!isPlaying) {
                isPlaying = true;
                playRomanticMelody();
                icon.className = "fa-solid fa-volume-high text-rose-400 animate-pulse";
                text.innerText = "Music: ON 🎶";
            } else {
                isPlaying = false;
                if(melodyInterval) clearInterval(melodyInterval);
                icon.className = "fa-solid fa-music text-rose-400";
                text.innerText = "Music: OFF";
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
    