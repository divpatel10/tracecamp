import barca from "../assets/barca-logo.jpg";
import games from "../assets/video-games.jpg";
import travelling from "../assets/travelling-image.png";

function Hobbies(){
    return(
<section id="hobbies" class="bg-gray-400 pt-20 pb-20">
            <h2 class="text-center text-xl font-bold text-gray-900">About</h2>
          
            <ul class="grid p-10 gap-10 md:grid-cols-3">

                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img src={games} class="w-full h-50 object-fill" />
                    <div class="p-4">
                        <h3 class="font-bold">Video Games</h3>
                        <p>I spend a lot of my free time playing video games. Some of my favorite games I've played are Fifa, RDR2, and God of War</p>
                    </div>
                </li>

                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img src={travelling} class="w-50  h-50 object-fill" />
                    <div class="p-4">
                        <h3 class="font-bold">Travelling</h3>
                        <p>I enjoy long trips! Some of my favorite places I've visited are Barcelona, Paris, New York City, and Nairobi </p>
                    </div>
                </li>

                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img src={barca} class="w-50 h-50 object-fill" />
                    <div class="p-4">
                        <h3 class="font-bold">Soccer</h3>
                        <p>Soccer is my favorite sport by far. I play pick up soccer on weekends, and my favorite soccer club is FC Barcelona. <br/> Visca Barca!</p>
                    </div>
                </li>
            </ul>

        </section>
    );
}

export default Hobbies;

