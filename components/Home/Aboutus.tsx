
import { Play } from 'lucide-react';

const AboutUsSection = () => {
    return (
        <section className="bg-[#051932] text-white py-16 px-8 rounded-2xl w-full h-full  mx-auto pl-20 pr-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left: Heading and Button */}
                <div className="flex flex-col items-start gap-8">
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        GET TO<br />KNOW<br />ABOUT<br />US
                    </h2>
                    <button className="bg-[#b79464] hover:bg-[#a28252] text-white px-6 py-3 rounded-full text-sm tracking-widest uppercase flex items-center gap-2">
                        Know More →
                    </button>
                </div>

                {/* Center: Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src="./assets/feature_section.jpg"
                        alt="Restaurant"
                        className="w-[350px] h-auto object-cover"
                    />
                </div>

                {/* Right: Description and Video */}
                <div className="flex flex-col gap-6 max-w-md text-sm leading-relaxed">
                    <p>
                        Qed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                        Accusantium Doloremque Laudantium Totam Aperiam. Eaque Ipsa Quae Ab
                        Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta
                        Sunt. Ut Enim Ad Minima Veniam, Quis Nostrum
                    </p>
                    <p>
                        Exercitationem Ullam Corporis Suscipit Laboriosam, Nisi Ut Aliquid
                        Ex Ea Commodi Consequatur. Ut Enim Ad Minima Quis Autem Vel Eum Iure
                        Reprehenderit Qui In Ea Voluptate Velit Esse Quam Nihil Molestiae
                        Consequatur.
                    </p>

                    {/* Video Preview */}
                    <div className="flex flex-col gap-2 items-start">
                        <span className="uppercase text-sm tracking-widest">Play Video</span>
                        <div className="relative w-48 h-28 rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/path-to-your-thumbnail.jpg"
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Play className="text-white w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
