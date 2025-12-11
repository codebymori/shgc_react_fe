import Button from './Button';

const Hero = ({ 
    heroImage, 
    title = "Default Title", 
    description = "Default description text", 
    buttonLabel = "Learn More",
    buttonBgClass = "bg-[#24452D]",
    buttonTextClass = "text-white",
    buttonIconClass = "text-white rotate-45",
    buttonSecondWordClass = "font-optima",
    onButtonClick = () => console.log('Button clicked'),
    showButton = true,
    showDivider = true 
}) => {
    return (
        <>
            {/* Hero */}
            <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] text-white flex justify-end items-center bg-white overflow-hidden"
            style={{
                backgroundImage: heroImage ? `url(${heroImage})` : 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: '#24452D',
                backgroundPosition: 'bottom',
                }}
            >
            </div>

            {/* White Card with Title - Positioned to overlap hero */}
            <div className="w-full flex justify-center -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 relative z-10 px-4">
                <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] w-fit min-w-[300px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[450px] px-10 py-2 text-center flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                    <h1 className="bg-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] px-10 py-2 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] font-optima text-black">
                        {title}
                    </h1>
                    
                    {/* Divider */}
                    {showDivider && (
                        <div className="flex justify-center mb-1 sm:mb-2">
                            <div className="w-px h-4 sm:h-6 md:h-8 bg-black"></div>
                        </div>
                    )}
                    
                    <p className="font-inter text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-light mb-3 sm:mb-4 md:mb-5 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                        {description}
                    </p>
                    
                    {showButton && (
                        <Button 
                            label={buttonLabel}
                            bgClass={buttonBgClass}
                            textClass={buttonTextClass}
                            iconClass={buttonIconClass}
                            secondWordClass={buttonSecondWordClass}
                            onClick={onButtonClick}
                        />
                    )}
                </div>
            </div>
        </>

    );

};

export default Hero;
