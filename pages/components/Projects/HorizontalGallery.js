import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Swipper from './Swipper';
import CustomButton from '../Shared/CustomButton';

gsap.registerPlugin(ScrollTrigger);

function HorizontalGallery({ projects }) {
  console.log();
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={scroller}
          className=" flex overflow-x-hidden w-[400vw] m-0 relative h-auto text-black dark:text-white"
        >
          {
            projects?.map((project, index) =>
              <>
                <section
                  ref={skills}
                  className="skill-set md:px-12 w-screen md:h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                >
                  <div className='py-5 md:px-[5%]'>
                    <div>
                      <Swipper images={project.images}></Swipper>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between px-2 pb-5 mt-3'>
                      <div>
                        <h1 className='text-xl md:text-3xl font-bold'>{project.title}</h1>
                        <h3 className='text-lg md:text-xl font-semibold'>{project.description}</h3>
                        {
                          project.features.map((item, index) => <p className='ml-2 font-medium'>{item}</p>)
                        }
                        <h3 className='text-lg md:text-xl font-semibold'>Tools Used:</h3>
                        <div className='flex flex-wrap'>
                          {
                            project.tools.map((tool, index) => <div key={index} className='font-medium'>
                              <div className='border-[1px] border-black dark:border-white mr-1 mt-1 p-1'>
                                {tool}
                              </div>
                            </div>)
                          }
                        </div>
                      </div>
                      <div>
                        <div className='flex flex-row md:flex-col md:items-end md:space-y-3'>
                          <a href={project.livesite} target="_blank" rel='noreferrer' >
                            <CustomButton name={"Live Site"} />
                          </a>
                          <a href={project.clientside} target="_blank" rel='noreferrer'>
                            <CustomButton name={"Client Side"} />
                          </a>
                          {
                            project.serverside && <a href={project.serverside} target="_blank" rel='noreferrer'>
                              <CustomButton name={"Server Side"} />
                            </a>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HorizontalGallery;
