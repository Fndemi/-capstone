import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.section`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 80px 0 40px;
  text-align: center;
  margin-top: 60px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 70px 0 30px;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 4rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  line-height: 1.8;
  font-size: 1.1rem;
  animation: slideUp 0.8s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: 3rem;
    margin: 0 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
    margin: 0 0.5rem;
    font-size: 1rem;
  }

  h1, h2, h3 { 
    margin: 2.5rem 0 1.5rem 0;
    color: ${props => props.theme.colors.primary};
  }
  
  p { 
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  .first-paragraph {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
  }
`;

const PresentationSection = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 3rem;
  border-radius: ${props => props.theme.borderRadius};
  margin: 3rem 0;
  text-align: center;
  animation: fadeIn 0.6s ease-in 0.3s both;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const Autobiography = () => {
  const handleDownload = (format) => {
    const fileName = `Florence_Ndemi_Autobiographical_Essay.${format}`;
    
    if (format === 'pdf') {
      const printWindow = window.open('', '_blank');
      const content = document.querySelector('.essay-content').innerHTML;
      
      printWindow.document.write(`
        <html>
          <head>
            <title>Florence Ndemi - Autobiographical Essay</title>
            <style>
              body { font-family: 'Inter', sans-serif; margin: 40px; line-height: 1.8; }
              .essay-content { max-width: 800px; margin: 0 auto; }
              h1, h2, h3 { color: #667eea; page-break-after: avoid; }
              p { text-align: justify; margin-bottom: 1rem; }
              .first-paragraph { font-size: 1.1rem; font-weight: 500; }
            </style>
          </head>
          <body>
            <div class="essay-content">${content}</div>
          </body>
        </html>
      `);
      
      printWindow.document.close();
      printWindow.print();
    } else if (format === 'pptx') {
      const essayText = `
FLORENCE NDEMI - AUTOBIOGRAPHICAL ESSAY
A Personal Journey Through Technology and Innovation

My journey in Information Technology began not with a computer, but with curiosity—a relentless desire to understand how the digital world that increasingly shapes our lives actually works.

EARLY LIFE AND FOUNDATION
Born and raised in Nyeri County, Kenya, I grew up in a community where technology was still emerging. My first encounter with a computer was at age 12 in our local cyber café, where I spent hours fascinated by the magic of the internet. That moment sparked a passion that would define my academic and professional trajectory.

[Full essay content would continue here...]

This autobiographical essay represents not just a reflection on my past, but a commitment to my future—a future where technology serves humanity, where innovation addresses real needs, and where the next generation of African technologists can build upon the foundation we're creating today.
      `;
      
      const blob = new Blob([essayText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName.replace('.pptx', '.txt');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };
  const autobiographyContent = `
    <h1 style="text-align: center; color: #667eea; margin-bottom: 2rem; font-size: 2.5rem;">Unfolding: The Journey of Florence Ndemi</h1>
    
    <div class="first-paragraph">
      Every morning at 5:30 am, before the sun breaks over the hills of Nyeri County, I lace up my running shoes and step into the cool Kenyan air. This ritual has become sacred to me—not just for the physical benefits, but for the clarity it brings. As my feet hit the ground in steady rhythm, I think about how far I've come from that small girl growing up in Githunguri Town, and how much further I still want to go. My name is Florence Ndemi, and this is the story of my journey so far—a journey of faith, perseverance, learning, and the beautiful discovery of who I am meant to be.
    </div>
    
    <h2>Roots in Githunguri: Where It All Began</h2>
    <p>I was born in Kijabe Hospital in Kiambu County, a place known for its medical excellence and stunning highland scenery. But my roots run deep in Githunguri Town, a small constituency in Kiambu County where I spent my childhood. Githunguri is the kind of place where everyone knows everyone, where the pace of life is measured not by traffic lights but by the rhythm of seasons, and where community isn't just a word but a way of life. It's a place that shaped me in ways I'm still discovering as I navigate my final year at Dedan Kimathi University of Technology, pursuing a Bachelor of Science in Information Technology.</p>
    
    <p>Growing up, I lived in a compound that housed my father's extended family. This wasn't just a home; it was a small village of its own, filled with aunts, uncles, and cousins. My childhood universe was bounded by the walls of that compound, where I played with my cousins, learned the first lessons of life, and discovered what it meant to belong to something larger than myself. We weren't wealthy, but we had something more valuable—we had each other. The compound taught me about relationships, about sharing space and resources, about negotiating childhood politics with cousins who were as much siblings as playmates. In that environment, I learned respect for elders, the value of hard work, and the irreplaceable joy of belonging to a community.</p>
    
    <h2>Family: The Foundation of Everything</h2>
    <p>I am the youngest of four children. I have two older sisters and one brother, and being the baby of the family came with its own unique experiences. There were times when I felt the weight of expectations—after all, my siblings had already blazed trails before me—but there were also times when I enjoyed the protection and guidance that came from having older siblings who had navigated the waters I was just beginning to wade into. Some of my most cherished memories are from the nights when we didn't have electricity. Instead of seeing the darkness as an inconvenience, we turned it into an opportunity. My siblings and I would gather together and crack jokes, tell stories, and laugh until our sides hurt. How I miss those days. In a world that moves so fast, where screens dominate our attention, those electricity-free nights taught me the irreplaceable value of human connection and the beauty of finding joy in simplicity.</p>
    
    <p>My mother has been the most influential figure in my life. She is a nurse and a farmer, and watching her balance these two demanding roles taught me everything I needed to know about work ethic. She loves farming with a passion I've rarely seen matched, and she is one of the hardest-working people I know. I would watch her wake up before dawn to tend to crops and then head to her nursing duties, never complaining, always pushing forward. From her, I learned that success isn't about talent alone—it's about showing up, putting in the work, and refusing to quit. I am a go-getter because my mother is a go-getter. Every time I push myself to wake up at 5:30 am for that morning run, every time I juggle multiple responsibilities and deadlines, I am channeling the spirit of that woman who worked two jobs and still made time for her family. She instilled in me the belief that hard work opens doors, and that belief has carried me through every challenge I've faced.</p>
    
    <h2>Early Education: Discovering My Love for Learning</h2>
    <p>My educational journey began at Ramos Vision School, where I studied up to grade 5. Even then, I had a natural aptitude for learning. I was always among the top students in my class, a pattern that would continue throughout my educational journey. There was something deeply satisfying about understanding concepts, about solving problems, about the moment when confusion gives way to clarity. Learning wasn't just something I did; it was something I enjoyed. After Ramos Vision School, I transferred to Nganduri Primary School in Kwamaiko, a boarding and day school where I completed my primary education. The transition to boarding school was significant. For the first time, I was spending extended periods away from my family, learning to navigate dormitory life, making new friends, and developing independence. Those years taught me resilience and adaptability—skills that would prove invaluable later in life.</p>
    
    <h2>High School Years: Mathematics and Mentorship</h2>
    <p>In 2018, I began my secondary education at St. Annes Lioki Secondary School, an experience that would shape me profoundly over the next four years until 2022. High school is where many young people truly begin to discover who they are, and for me, it was no different. St. Annes Lioki was where my love for mathematics truly blossomed. Mathematics became my favorite subject, and I excelled in it remarkably well. There was something about the logic, the problem-solving, the way numbers and formulas came together to unlock solutions—it all resonated deeply with me. My proficiency in mathematics didn't go unnoticed. I was made a peer tutor, and every Sunday evening, I would share my skills with junior students, helping them navigate the challenges of mathematical concepts.</p>
    
    <p>Those tutoring sessions were transformative, not just for the students I helped, but for me. Teaching others helped me understand the material at an even deeper level. It also awakened in me a passion for helping others succeed, for being the bridge between confusion and understanding. There's something incredibly fulfilling about seeing the light of comprehension dawn in someone's eyes, about knowing you've helped unlock something that had been inaccessible to them. Looking back, I realize that those Sunday evenings planted seeds of my future desire to help young people advance in their careers—a legacy I still hope to leave. I performed very well throughout my secondary education, consistently ranking among the top students. But high school was about more than just academics. It was about friendships, about learning to live with people from different backgrounds, about discovering my strengths and weaknesses, and about beginning to dream about what my future might hold.</p>
    
    <h2>Faith: The Anchor of My Soul</h2>
    <p>While I grew up going to church, I was born again at a young age but didn't fully understand what that meant. Faith was something I inherited, something that existed in the background of my life, but it wasn't yet something I had made my own. That changed dramatically when I got to university. In campus, I became deliberate about my faith. No longer content with inherited beliefs, I began to seek the meaning of the Bible for myself, to understand how it related to me and the way I lived. This wasn't a sudden transformation but a gradual awakening—a journey of questions and discoveries, of doubts resolved and convictions strengthened.</p>
    
    <p>I am now a strong believer in Jesus Christ, and this relationship has become the foundation of my values. It influences how I see the world, how I treat others, and how I make decisions. My faith has taught me something profound and countercultural: our works don't make us right with God; only our faith in Jesus Christ does. This is perhaps the most interesting fact about me and my worldview. In a world that constantly tells us we must earn our worth through achievements, productivity, and perfection, my faith reminds me that my worth is already established. I am valuable not because of my GPA, not because of the projects I build, not because of the events I plan, but because I am loved by God. This truth has been the antidote to the perfectionism that once plagued me.</p>
    
    <p>My faith influences my daily decisions in practical ways. It shapes how I treat people—with kindness and respect, recognizing the dignity in every person. It influences my work ethic—I work hard not to prove my worth, but as a response to grace I've received. It guides my ambitions—I don't just want success for myself; I want to use whatever I build to give back to my community and help others. Faith also sustains me during difficult times. When I was juggling the demands of a rigorous bootcamp with university coursework, when I was waking up at 5:30 am and going to bed late, when perfectionism whispered that I wasn't good enough, my faith reminded me to be gracious with myself, to persevere, and to trust that there is a purpose in the struggle. Every morning, after my run and shower, I read my Bible. It's a non-negotiable part of my routine. In those quiet moments, before the demands of the day begin, I center myself, remember who I am, and prepare my heart and mind for whatever lies ahead.</p>
    
    <h2>University Life: A New Chapter Begins</h2>
    <p>In September 2022, I began my journey at Dedan Kimathi University of Technology in Nyeri County. The transition from Kiambu to Nyeri was amazing. All my life had revolved around Kiambu—my family, my friends, my familiar places. Moving to Nyeri meant stepping into the unknown, and there was something exhilarating about that. I moved into a hostel, another step toward independence. Living away from home, managing my own schedule, navigating university life—it was all new, and it was all exciting. I will finish my degree in December 2025, marking the end of one chapter and the beginning of another.</p>
    
    <p>University life changed my perspective on so many things. Age was certainly a factor, but it was more than that. It was exposure to new ideas, new people, new ways of thinking. Every day I learned new things and unlearned old assumptions. This process of constant growth and evolution is something I've come to love deeply. I love how life is unfolding. I'm enjoying the journey, every step of it. Campus life taught me about relationships in a way that living at home never could. I learned about the complexity of human connections, about the difference between superficial acquaintances and deep friendships, about loyalty and trust. I discovered that I am very fun to be around once I get to trust someone, and very loyal too. This is something I wish more people knew about me. At first meeting, I might seem reserved or cautious. I don't open up immediately, and I'm selective about who I let into my inner circle. But this isn't coldness—it's discernment. Once I trust someone, once they've proven themselves trustworthy and genuine, I'm all in. I'm the friend who shows up, who celebrates your victories and supports you through defeats, who remains loyal even when it's difficult.</p>
    
    <h2>Building Community: The Blockchain and Web Community</h2>
    <p>One of the most significant experiences of my university years has been the co-founding of the Blockchain and Web Community at Dedan Kimathi University. This community emerged from both disappointment and determination—a combination that often births the most meaningful endeavors. My friend and I had applied for a hackathon, excited about the opportunity to test our skills and learn. We weren't accepted. We could have let that rejection define us, could have seen it as a sign that we weren't good enough. Instead, we channeled our passion for technology into creating something of our own. If we couldn't participate in that hackathon, we would create our own space for learning and growth. We were passionate about the technology, and so the Blockchain and Web Community was born.</p>
    
    <p>I serve as Secretary and Event Planner for the community, roles that have taught me invaluable lessons about leadership, organization, and the power of bringing people together. Over time, I have planned many events, bringing in speakers and educators from prestigious organizations like the Ethereum Foundation, hosting Bitcoin events, welcoming the Sui Community, and more. Each event is an opportunity to expose my peers to new ideas, to create connections between students and industry professionals, and to build a culture of innovation on our campus. But the most memorable moments aren't the big-name speakers or impressive turnout numbers. The most meaningful moments are seeing my colleagues thrive in the community, watching them grow in knowledge and confidence, and enjoying each other's company while talking about life in general. The community has become more than just a tech club; it's become a family—a space where we celebrate successes, support each other through challenges, and grow together.</p>
    
    <p>This experience has reinforced something I've always believed: with the right mindset and skills, everything is possible. We didn't have a fancy budget or institutional backing when we started. We just had passion, determination, and a willingness to create something where nothing existed before. That rejection from the hackathon could have been the end of our story, but we chose to make it a beginning instead. We transformed disappointment into opportunity, and in doing so, created something that has impacted dozens of students. That's the spirit of innovation, and it's a spirit I hope to carry with me throughout my career.</p>
    
    <h2>The Africa Bitcoin Conference: A Continental Experience</h2>
    <p>One of the most transformative experiences of my university years came in December 2024, when I attended the Africa Bitcoin Conference, held from December 3rd to 5th. This wasn't just any conference attendance—I was fully sponsored through my connection to Bitcoin Dada, a community dedicated to training women in Bitcoin education. The fact that I was sponsored made the experience even more meaningful; it was validation that my work in the Blockchain community was being noticed and valued. Being fully funded to attend a continental conference—a young woman from Githunguri Town, studying in Nyeri—felt almost surreal. It was a testament to what's possible when you combine hard work, passion, and strategic connections.</p>
    
    <p>The conference itself was incredible. Being surrounded by hundreds of people passionate about Bitcoin and blockchain technology, learning from experts, and seeing the potential of these technologies to transform Africa's financial landscape was eye-opening. Every session offered new insights, every conversation sparked new ideas. I saw firsthand how Africans are using blockchain technology to address challenges unique to our context—financial inclusion in areas with limited banking infrastructure, transparent supply chains for agricultural products, secure digital identities for people without formal documentation. We're not just adopting technologies developed elsewhere; we're innovating and creating solutions that work for our context.</p>
    
    <p>One moment stands out, both thrilling and regret-inducing: I saw Jack Dorsey, the former CEO of Twitter and a prominent Bitcoin advocate. There he was, just meters away from me, and I froze. I didn't have the balls to talk to him, to introduce myself, to ask him a question. I regret that now, but I also understand it—sometimes we're so in awe of people we admire that we forget they're human too, that they might actually enjoy a conversation with an eager young technologist from Kenya. Despite my missed opportunity with Jack Dorsey, I had a great time. The conference broadened my understanding of Bitcoin beyond the technical aspects, showing me its potential social and economic impact. It connected me with like-minded individuals from across Africa who are working to build a more inclusive financial future. And perhaps most importantly, it reinforced a powerful truth: everything is possible with the right mindset and skills. This experience showed me that I belong in these spaces. I'm not just an observer of the tech revolution; I'm a participant, a contributor.</p>
    
    <h2>The Bootcamp Challenge: Testing My Limits</h2>
    <p>If the Africa Bitcoin Conference expanded my horizons, the full-stack development bootcamp tested my limits. For six months, I participated in the Directed Bootcamp, an intensive program designed to transform students into skilled full-stack developers capable of building production-ready applications. This was one of the most challenging periods of my life, and also one of my proudest achievements. The bootcamp demanded everything from me. While my peers at university were managing coursework alone, I was juggling the bootcamp's requirements on top of my undergraduate studies. The bootcamp required us to build projects on tight schedules—real, functional applications that demonstrated our mastery of front-end and back-end technologies. Meanwhile, I still had to prepare for and take CATs (Continuous Assessment Tests) and exams for my degree.</p>
    
    <p>It was so humbling having to juggle between studies and the bootcamp, but I emerged victorious. The hardest part was having to build projects for the bootcamp on a tight schedule while also taking CATs and exams for my undergraduate degree. My typical day during this period was grueling. I would wake up at 5:30 am for my morning run—a non-negotiable part of my routine that helped me maintain my physical and mental health. After my run, I would take a shower and read my Bible, centering myself for the day ahead. I'd often get a short nap, then have my meal around noon. If I didn't have classes, I would work on my projects. If I had early classes, the day would change quite a bit. I would often work late into the night, having to wake up very early and sleep very late, sacrificing rest to meet deadlines and maintain my academic standards.</p>
    
    <p>There were moments when I wondered if I could actually do it, when the exhaustion seemed overwhelming, when perfectionism whispered that I was failing because I couldn't do everything perfectly. But I persevered. I learned to be gracious with myself, to celebrate small victories, to ask for help when I needed it, and to keep moving forward even when I was tired. The results speak for themselves. I emerged victorious from the bootcamp, having built several full-stack applications that showcase my skills. I have built a full-stack application that's a clone for an e-commerce platform and several others. The e-commerce and blog application showcase my skills learned well. These aren't just academic exercises; they're real applications that solve real problems and could be launched into production with minimal additional work.</p>
    
    <p>This experience taught me something profound about myself: I am capable of far more than I sometimes believe. When faced with seemingly impossible demands, when required to stretch beyond my comfort zone, I don't break—I grow. The bootcamp was humbling, but it was also empowering. It proved that with determination, discipline, and grace for myself when I fall short of perfection, I can accomplish extraordinary things. This has been one of my proudest achievements—not just the technical skills I gained, but the proof of my own resilience and capacity for growth.</p>
    
    <h2>Overcoming Perfectionism: Learning to Be Gracious with Myself</h2>
    <p>One of the major challenges I've had to overcome is my relationship with perfection. For much of my life, I held myself to impossibly high standards. Being among the top students in primary school, excelling in high school, maintaining high performance in university—these achievements fed a narrative that I had to be perfect, that anything less than excellence was failure. Perfectionism is a lie, especially at the beginning of any new endeavor. This is a lesson I've learned slowly and sometimes painfully. When you're learning to code, your first programs will have bugs. When you're organizing your first event, things won't go exactly as planned. When you're building your first full-stack application, you'll encounter problems you don't know how to solve. That's not failure—that's learning.</p>
    
    <p>I've learned to be gracious with myself. This doesn't mean lowering my standards or accepting mediocrity. It means understanding that growth is a process, that mistakes are part of learning, and that my worth isn't determined by whether I get everything right on the first try. It means celebrating progress rather than only celebrating perfection. This shift in mindset has been liberating. It's allowed me to take on challenges I might have avoided before out of fear of not doing them perfectly. It's allowed me to learn more rapidly because I'm not paralyzed by the fear of making mistakes. And ironically, letting go of the need for perfection has made me more effective, not less, because I'm willing to iterate, to experiment, and to learn from failures.</p>
    
    <p>When I look back at my younger self, the advice I would give is this: "I am proud of you for how you handled so much at a young age. I am glad you persevered through everything and didn't let failure stop you." My younger self needed to hear that perseverance matters more than perfection, that showing up and trying is more valuable than waiting until you're sure you can do something perfectly. She needed to hear that making mistakes doesn't make you a failure—giving up does. She needed to hear that it's okay to not have everything figured out, that part of growing up is learning as you go.</p>
    
    <h2>Life Beyond Academics: Finding Joy in Simple Things</h2>
    <p>I haven't always succeeded at everything I've tried. I explored hockey at one point, for instance. It didn't work pretty well. I remember a few years ago I went to Meru University for a hockey event and got a severe sunburn. I never went back. This experience taught me an important lesson: not every interest you explore will become a passion, and that's okay. Part of discovering who you are involves discovering what you're not, what doesn't resonate with you, what doesn't bring you joy or fulfillment. I do have one consistent artistic outlet though: I sing well, especially in the shower. There's something about the acoustics of a bathroom and the privacy of that space that brings out my inner performer. While I may not be pursuing a music career, this small joy reminds me that life isn't all about productivity and achievement. Sometimes it's important to do something simply because it brings you joy, with no purpose beyond the pleasure of the moment itself.</p>
    
    <h2>Daily Rhythms: The Structure That Sustains Me</h2>
    <p>My typical day now, in my final year of university, reflects the priorities that have emerged from my journey. I wake up at 5:30 am for my morning run. There's something magical about those early morning hours—the air is cool, the world is quiet, and I have time to think without distraction. Running isn't just exercise; it's meditation in motion. It clears my mind, strengthens my body, and prepares me mentally for the challenges ahead. Some of my best ideas come to me during those early morning runs. After my run, I take a shower and then spend time reading my Bible. This spiritual practice grounds me, reminds me of what truly matters, and provides perspective that keeps me from getting lost in the stress of daily demands.</p>
    
    <p>Following my morning routine, I typically take a short nap to recharge. Then I have my meal around noon. If I don't have classes, I work on my projects—coding, debugging, building features, or learning new technologies. The beauty of being in my final year is that I have more flexibility in my schedule, which allows me to dedicate significant time to personal projects and community activities. If I have early classes, the day changes quite a bit. Classes take priority, and my project work gets shifted to later in the day or evening. My day isn't all work. I make time for the Blockchain and Web Community, for planning events and supporting my peers. I make time for friendships, for conversations about life in general, for laughter and connection. This routine might sound demanding, and it is. But it's also deeply satisfying. Every day I'm making progress toward my goals, building skills, strengthening relationships, and moving closer to the future I envision.</p>
    
    <h2>Looking Forward: Career and Entrepreneurship</h2>
    <p>As I approach the completion of my undergraduate degree, I find myself at an exciting crossroads. I am currently in the juggle of finishing strong in my undergraduate studies while also getting a remote place to work and get paid. This dual focus—completing my degree with excellence while also beginning my professional career—requires careful balance. My portfolio of full-stack applications positions me well for the job market. I'm not just a student with theoretical knowledge; I'm a developer who can build real, functional applications. The bootcamp experience has given me practical skills that many graduates lack. I'm confident in my abilities, but also humble enough to know that I still have much to learn.</p>
    
    <p>The remote work aspect is particularly important to me. Remote work offers flexibility and the opportunity to work with companies and teams from around the world. It also allows me to potentially earn in stronger currencies while living in Kenya, which has economic advantages. But beyond the practical benefits, remote work represents a new model of professional life—one where location is less important than skill and contribution. Finishing strong matters to me. After maintaining a position among the top students throughout my educational journey, I want to close this chapter well. I want to complete my final exams with the same excellence I've maintained throughout.</p>
    
    <p>But my vision extends far beyond just landing a good job. My goal in life is to make a difference by giving back to the community and starting my own startup. These two goals are interconnected—I believe that entrepreneurship, done right, is one of the most powerful forms of giving back. A successful startup creates jobs, solves problems, provides value to customers, and contributes to economic development. The specific startup I envision is a platform that connects African talent to the job market. This idea comes from personal experience and observation. Africa is full of talented, skilled, hardworking professionals who struggle to access opportunities because of geographic barriers, lack of networks, or simple lack of visibility. Meanwhile, companies around the world are looking for talent but don't know how to access the African talent pool.</p>
    
    <p>A platform that bridges this gap would be transformative. It would help African professionals find remote work opportunities with competitive compensation. It would help companies access a broader talent pool and benefit from diverse perspectives. And it would contribute to the broader goal of economic development on the continent by enabling more Africans to participate in the global digital economy. This vision is informed by my own journey. I've experienced the power of connections—how my involvement with Bitcoin Dada led to sponsorship for the Africa Bitcoin Conference, how co-founding the Blockchain and Web Community opened doors I didn't even know existed. Many talented people never get those opportunities simply because they don't have access to the right networks. I want to democratize access to opportunities.</p>
    
    <h2>Legacy: The Impact I Want to Leave</h2>
    <p>The legacy I'd love to leave behind is nothing short of incredible. I want to help people advance in their careers, more so the young people, giving them the right support when needed. This isn't just abstract idealism; it's rooted in concrete memories of how meaningful it was to tutor mathematics on Sunday evenings in high school, seeing the light of understanding dawn in students' eyes. I want to do that at scale. I want to be remembered as someone who didn't just accumulate success for herself but used whatever platform and resources she gained to lift others up. I want to be someone who created opportunities where none existed, who saw potential in people before they saw it in themselves, who was generous with knowledge, connections, and support.</p>
    
    <p>One of the most important lessons I've learned, particularly through my experiences at the Africa Bitcoin Conference and the bootcamp, is that everything is indeed possible with the right mindset and skills. This isn't empty motivational speak—it's a truth I've lived. The right mindset means believing that you can learn what you don't know, that challenges are opportunities for growth rather than insurmountable obstacles, that failure is feedback rather than a final verdict. It means being willing to start before you feel ready, to take risks even when success isn't guaranteed, and to persist even when progress is slow.</p>
    
    <h2>An African Story: Innovation from the Continent</h2>
    <p>My story is inherently an African story, and I'm proud of that. I'm a young Kenyan woman pursuing technology in a world where both "African" and "woman" come with stereotypes and assumptions that don't reflect reality. Africa is often portrayed as a place of deficits—lacking infrastructure, opportunities, technology. But my experience tells a different story. Africa is a place of innovation, of young people building solutions to local problems, of communities coming together to create opportunities where none existed before. The Blockchain and Web Community is a perfect example—we didn't wait for someone to give us permission or resources; we created what we needed.</p>
    
    <p>The Africa Bitcoin Conference showed me the incredible innovation happening across the continent. Africans are using blockchain technology to address challenges unique to our context. We're not just adopting technologies developed elsewhere; we're innovating and creating solutions that work for our context. My vision for a platform connecting African talent to the global job market comes from understanding both the potential and the challenges of the African context. We have the talent—I see it every day in my classmates, in the Blockchain community, in young people across Kenya and beyond who are teaching themselves to code, building applications, and dreaming big dreams. What we often lack is access to opportunities and the networks that open doors.</p>
    
    <p>Being a woman in technology adds another dimension to my story. Technology fields remain male-dominated, and women often face additional barriers and skepticism. But I've never let my gender limit what I believe I can achieve. I excelled in mathematics not despite being a woman, but as a woman. I co-founded and lead in the Blockchain community not as an exception to my gender, but as an expression of my capabilities. My gender is part of my identity, but it doesn't define my limitations. I hope that my story can inspire other young African women to pursue technology, to believe they belong in these spaces, and to not let stereotypes or barriers stop them from developing their full potential.</p>
    
    <h2>The Future: Building on Strong Foundations</h2>
    <p>As I look toward the future, I do so with a mixture of excitement and determination. The foundation has been laid—the education, the skills, the experiences, the network. Now comes the building phase. My immediate focus is finishing my degree strong while securing remote work. This isn't just about income, though financial independence is important. It's about beginning to apply my skills in real-world contexts, learning from experienced professionals, and continuing to develop my capabilities. Every job is a learning opportunity, a chance to grow and build experience that will serve my long-term goals.</p>
    
    <p>But remote work is just the beginning. My ultimate vision is entrepreneurship—building a startup that connects African talent to global opportunities. This vision will require more than just technical skills. It will require business acumen, fundraising capabilities, team building, and perseverance through inevitable setbacks. I'm under no illusions that it will be easy, but I'm confident that it's possible. After all, I've already accomplished things that seemed impossible—juggling a bootcamp and university, getting fully funded to attend a continental conference, building functional full-stack applications while maintaining academic excellence.</p>
    
    <p>My faith will continue to be central to how I approach the future. The reminder that my worth isn't based on my achievements frees me to pursue excellence without the crushing weight of perfectionism. The principle that we're called to serve others gives direction to my ambitions. The trust that there's a purpose in both successes and struggles provides resilience during difficult times. I'm also committed to maintaining the balance I've learned is essential. As my career develops and responsibilities increase, it would be easy to sacrifice health, relationships, and personal wellbeing on the altar of achievement. I refuse to do that. The morning runs, the Bible reading, the friendships, the moments of joy—these aren't obstacles to success; they're the foundation that makes sustained success possible.</p>
    
    <h2>Conclusion: A Story Still Unfolding</h2>
    <p>As I bring this reflection to a close, I'm acutely aware that I'm not closing a story but pausing to reflect in the middle of one. I'm in my early twenties, in my final year of university. The bulk of my life, the majority of my story, is still ahead of me. I don't know everything that will happen. I don't know if my startup will succeed on the first try or if I'll face failures before finding success. I don't know exactly what my career path will look like or where life will take me geographically. I don't know who I'll meet, what relationships will shape me, or what unexpected opportunities will arise.</p>
    
    <p>What I do know is this: I'm prepared for the journey. The foundation has been laid. The work ethic instilled by my mother, the academic excellence developed through years of study, the technical skills acquired through my degree and bootcamp, the leadership experience from the Blockchain community, the faith that grounds me, the relationships that support me—these are the resources I carry forward. I know that I'm committed to making a difference. Whether through a successful startup or through other means, I will find ways to give back, to help others, to leave the world better than I found it. This isn't just aspiration; it's conviction.</p>
    
    <p>I know that I will continue to learn and grow. The Florence who finishes this degree in December 2025 will be different from the Florence who writes these words in October 2025, just as both are different from the Florence who started university in September 2022. Change is the only constant, and I welcome it. Day by day, I learn new things and unlearn old assumptions. I know that I will face challenges. There will be rejections, failures, disappointments, and obstacles. But I've already proven to myself that I can overcome challenges. I've juggled impossible schedules, built complex applications, led a community, and maintained excellence across multiple domains. Whatever challenges come, I have evidence of my own resilience to draw upon.</p>
    
    <p>Every morning when I wake up at 5:30 am and step into the cool Kenyan air for my run, I'm reminded of how far I've come and how much further I want to go. From Githunguri Town to Nyeri, from primary school to university, from mathematics peer tutor to Blockchain community co-founder, from bootcamp participant to full-stack developer, from believer to disciple—each step has been necessary, each experience valuable. I am Florence Ndemi, a young woman standing at the intersection of dreams and reality, faith and action, learning and becoming. My journey is still unfolding, and I'm enjoying every step of it. This is my story so far, and I believe the best chapters are still ahead.</p>
  `;

  return (
    <>
      <section className="section" style={{ paddingTop: '4rem', marginTop: '60px' }}>
        <div className="wide-container">
          <ContentContainer className="essay-content">
            <div dangerouslySetInnerHTML={{ __html: autobiographyContent }} />
          </ContentContainer>
        </div>
      </section>
    </>
  );
};

export default Autobiography;