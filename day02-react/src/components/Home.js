// npm install --save-dev @iconify/react @iconify-icons/ant-design
import { Icon, InlineIcon } from '@iconify/react';
import linkedinOutlined from '@iconify-icons/ant-design/linkedin-outlined';


function Home(){
    return(
        <section id="home" 
        class="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 text-white text-center grid place-items-center -space-y-40">

            <p class="text-2xl -mb-40">Hi!👋 I'm</p>
            <h1 class="font-bold text-6xl">Divyanshu Patel</h1>
            <p class="text-2xl">Computer Science Student</p>
            <a 
            href="https://www.linkedin.com/in/divvpatel/"
            target="_blank"
            class="bg-yellow-600 hover:bg-yellow-400 hover:text-black text-white-800 font-bold py-3 px-6 rounded inline-flex items-center" rel="noreferrer">
                <Icon icon={linkedinOutlined} />
                <span text-lg>Connect</span>
                
            </a>
        </section> 
    );
}

export default Home;