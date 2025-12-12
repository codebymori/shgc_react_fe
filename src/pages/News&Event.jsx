import newsImg from "../assets/img/highlanders2.webp";
import Hero from "../components/Hero";
import ArticleTabs from "../components/ArticleTabs";

const NewsEvent = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
             <Hero
            heroImage={newsImg}
            title="News & Event"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
            buttonLabel="Inquire NOW"
            onButtonClick={() => console.log("Inquire clicked")}
            />

            <div className="">
                <ArticleTabs 
                    showAllTab={true}      // Tampilkan tab "All" 
                    showNewsTab={true}     // Tampilkan tab "News"
                    showEventsTab={true}   // Tampilkan tab "Events"
                    count={6}              // Jumlah artikel yang ditampilkan
                    // customData={yourData}  // Data custom (opsional)
                />
            </div>
            
        </div>
        
    );
};

export default NewsEvent;