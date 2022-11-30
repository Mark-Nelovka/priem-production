import s from "../HmM.module.css";
import container from "../../../styles/container.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);


import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


export default function HmM_en() {
    const [id,setId] = useState(0)
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -200),MoveIn(0,200));

    const handleUpId = () => {
        setId(id-1)
    }
    const handleDownId = () => {
        setId(id++)
    }
    return (
        <>
            <section className={`${container.container__stretch} ${s.HmM}`}>
                 <div className={s.videoContainer}>
                    <video className={s.video}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}
                    />
                </div>
                
                <div className={s.HmM__box}>
                    <ScrollContainer>
                        {/* <ScrollPage></ScrollPage>
                        <ScrollPage></ScrollPage>
                        <ScrollPage></ScrollPage>
                        <ScrollPage></ScrollPage> */}
            <ScrollPage>
                            <Animator animation={FadeUp}>

                     < div className={`${s.HmM__item} `}>
                    <p className={s.HmM__title}>SCRIPT WRITING</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>idea development</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>reference selection</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>script writing</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>detailed storyboard</p>
                        </li>
                    </ul>
                        </div>
                </Animator>
            </ScrollPage>
                <ScrollPage>
                            <Animator animation={FadeUp}>
                               
                         <div className={s.HmM__item} >
                            <p className={s.HmM__title}>TRITMENT WRITING</p>
                            <ul className={s.HmM__about}>
                                <li className={s.HmM__description}>
                                    <p>Logline / plot</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>reference per frame</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>color palette solution</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>camera movement</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>makeup / costume</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>dreamcast</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>synopsis</p>
                                </li>
                            </ul>
                        </div>
                    </Animator>
                     
            </ScrollPage>
            <ScrollPage>
                            <Animator animation={FadeUp}>
                              
                                <div className={s.HmM__item} >
                    <p className={s.HmM__title}>TEAM</p>                    
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>selection of a team on request</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>work with the best in the country</p>
                        </li>
                    </ul>
                </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                            <Animator animation={FadeUp}>
                            
                                <div className={s.HmM__item} >
                    <p className={s.HmM__title}>CAMERA + LIGHT</p>
                    <p>
                        Have our 
                    </p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                Blackmagic 4k 
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                2 LED  
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                2 Softbox
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                1 Godox
                            </p>
                        </li>
                    </ul>
                </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                            <Animator animation={FadeUp}>
                               
                                <div className={s.HmM__item}>
                    <p className={s.HmM__title}>STYLE</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                creating an image
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                make-up selection
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                working with a stylist
                            </p>
                        </li>
                    </ul>
                </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                            <Animator animation={FadeUp}>
                                 <div className={s.HmM__item}>
                    <p className={s.HmM__title}>ACTING COACHING</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                working with an acting coach
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                rehearsals with the director before filming
                            </p>
                        </li>
                    </ul>
                </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                            <Animator animation={FadeUp}>
                                <div className={s.HmM__item}>
                    <p className={s.HmM__title}>VIDEO EDIT / COLOR / SOUND DESIGN</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                collaboration with the team
                            </p>
                        </li>
                    </ul>
                </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                            <Animator animation={FadeUp}>
                                <div className={s.HmM__item}>
                    <p className={s.HmM__title}>OUR STUDIO</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                70 sq/m
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                with equipment
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                makeup area
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                terrace overlooking the city
                            </p>
                        </li>
                    </ul>
                </div>
                </Animator>
            </ScrollPage>
            {/* <ScrollPage>
                <Animator animation={FadeUp}></Animator> */}
            {/* </ScrollPage> */}
        </ScrollContainer>
                </div>
                    
                    
               
            </section>
        
        {/* <section className={`${container.container__stretch} ${s.HmM}`} onClick = {handleDownId}>
            <div className={s.videoContainer}>
                <video className={s.video}
                    playsInline
                    autoPlay
                    loop
                    muted
                    src={require("../../../Video/IMG_5834.mp4")}
                />
                 <ul className={`${s.HmM__list}`} >
                  
                        < li className={`${s.HmM__item}  ${id === 1 && s.HmM__bottom__center} ${id === 2 && s.HmM__center__top}`}>
                    <p className={s.HmM__title}>SCRIPT WRITING</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>idea development</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>reference selection</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>script writing</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>detailed storyboard</p>
                        </li>
                    </ul>
                        </li>
                    {id === 2 &&
                        <li className={s.HmM__item} >
                            <p className={s.HmM__title}>TRITMENT WRITING</p>
                            <ul className={s.HmM__about}>
                                <li className={s.HmM__description}>
                                    <p>Logline / plot</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>reference per frame</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>color palette solution</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>camera movement</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>makeup / costume</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>dreamcast</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>synopsis</p>
                                </li>
                            </ul>
                        </li>
                    }
               { id === 3 && <li className={s.HmM__item} >
                    <p className={s.HmM__title}>TEAM</p>                    
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>selection of a team on request</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>work with the best in the country</p>
                        </li>
                    </ul>
                </li>}
                {id === 4 && <li className={s.HmM__item} >
                    <p className={s.HmM__title}>CAMERA + LIGHT</p>
                    <p>
                        Have our 
                    </p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                Blackmagic 4k 
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                2 LED  
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                2 Softbox
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                1 Godox
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 5 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>STYLE</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                creating an image
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                make-up selection
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                working with a stylist
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 6 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>ACTING COACHING</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                working with an acting coach
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                rehearsals with the director before filming
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 7 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>VIDEO EDIT / COLOR / SOUND DESIGN</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                collaboration with the team
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 8 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>OUR STUDIO</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                70 sq/m
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                with equipment
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                makeup area
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                terrace overlooking the city
                            </p>
                        </li>
                    </ul>
                </li>}
            </ul>
            </div>

           
        </section> */}
        </>
    )
}