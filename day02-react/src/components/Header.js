function Header(){
    return(
        <header class="bg-yellow-600 justify-center flex-row fixed w-full text-white space-x-5 ">
       
        <a href="#home" class="px-8 py-4 hover:bg-gray-500 block hover:bg-purple-600 float-left font-bold">Divyanshu Patel</a>

        <ul class="float-right flex">
            <li><a href="#about" class="px-8 py-4 hover:bg-gray-500 block hover:bg-purple-600 float-right">About</a></li>
            <li><a href="#hobbies" class="px-8 py-4 hover:bg-gray-500 block hover:bg-purple-600 float-right">Hobbies</a></li>
          </ul>

    </header>
    );
}

export default Header;