
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Slider() {
    const stackElements = [{ id: 1, src: "/images/stack/html.png", nom: 'HTML' }, { id: 2, src: "/images/stack/css.png", nom: 'CSS' }, { id: 3, src: "/images/stack/sass.png", nom: 'Sass' }, { id: 4, src: "/images/stack/javascript.png", nom: 'Javascript' }, { id: 5, src: "/images/stack/notion.png", nom: 'Notion' }, { id: 6, src: "/images/stack/slack.svg", nom: 'Slack' }, { id: 7, src: "/images/stack/monday.svg", nom: 'HTML' }, { id: 8, src: "/images/stack/figma.png", nom: 'HTML' }, { id: 9, src: "/images/stack/reactjs.svg", nom: 'React JS' }, { id: 10, src: "/images/stack/nextjs.png", nom: 'Next JS' }, { id: 11, src: "/images/stack/vercel.png", nom: 'Vercel' }, , { id: 12, src: "/images/stack/wordpress.png", nom: 'Wordpress' }, { id: 13, src: "/images/stack/nodejs.png", nom: 'Node JS' }, { id: 14, src: "/images/stack/php.png", nom: 'PHP' }, { id: 15, src: "/images/stack/mysql.png", nom: 'MySQL' }, { id: 16, src: "/images/stack/symfony.png", nom: 'Symfony' }, { id: 17, src: "/images/stack/mongodb.png", nom: 'Mongo DB' }, { id: 18, src: "/images/stack/teams.png", nom: 'Teams' }]
    
    return (
        <Splide
            options={{
                rewind: true,
                gap: '.5rem',
                autoplay: true,
                autoWidth: true,
                drag: true,
                arrows: false,
                pagination: false,
                perPage: 5,
                type: 'loop',
                focus: 'center',
                easing: 'ease',
                autoScroll: {
                    speed: 1,
                    pauseOnHover: true,
                },
            }}
            extensions={{ AutoScroll }}
            aria-label="ma stack">
            {stackElements.map(element =>
                <SplideSlide className='stack__box' key={element.id}>
                    <div className='stack__box-picture'>
                        <img src={element.src} alt={element.nom} />
                    </div>
                </SplideSlide>
            )}
        </Splide>
    )
}

export default Slider