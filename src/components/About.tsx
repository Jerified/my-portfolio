'use client'

import React from 'react'
import {MdSpeed, MdLightbulbOutline, MdDevices, MdRocketLaunch} from 'react-icons/md'
import dynamic from 'next/dynamic'
import Image from 'next/image'
// import regraph from 'regraph'
const Chart = dynamic(() => import('react-apexcharts'),{ssr: false})

const data = {
  series: [
    {
      data: [90, 80, 70, 60, 50, 40, 30, 20]
    },
    // fillColor: '#fff'
   
  ],
  options: {
    chart: {
      type: 'bar',
      height: 300,
    },
    // colors: ['#f4E3'],
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '100%'
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        fontSize: '20px'
      },
      // background: {
      //   enabled: true,
      //   foreColor: '#fff',
      //   borderColor: '#fff',
      //   colors: ['#60A5FA'],
      //   borderRadius: 2
      // }
    },
    grid: {
      show: false,
      strokeDashArray: 0,
      // borderColor: '#fff',
      yaxis: {
        lines: {
          show: false
        }
      },
      // row: {
      //   colors: ['#fff']
      // },
      padding: {
        bottom: 5
      }
    },
    xaxis: {
      categories: [
        'CSS',
        'HTML',
        'React',
        'JavaScript',
        'typeScript',
        'Nextjs',
        'UI Design',
        'Sketch'
      ],
      axisBorder: {
      show: false
      },
      labels: {
        // background: '#F9FAFB',
        colors: '#111827',
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: true
      }
    },
    // grid: {
    //   row: {
    //     colors: ['#fff']
    //   }
    // },
    // colors: ['#60A5FA'],
    fill: {
      colors: [function ({ value, seriesIndex, w }) {
        if(value < 100) {
          return 
            '#60FA'
            // type: 'gradient',
            // gradient: {
            //   shade: 'dark',
            //   type: 'vertical',
            //   shadeIntensity: 0.5,
            //   gradientToColors: ['#FDD835']
            // }
          } else {
            return '#60A4F7'
            // w.config.colors[seriesIndex]
          }
        }
      ],
      // pattern: {
      //   style: 'horizontalLines'
      // },
      // background: {
      //   enabled: true,
      //   foreColor: "#FFF",
      //   colors: ["#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF"],
      //   borderWidth: 1,
      //   borderColor: '#fff',
      //   borderRadius: 2,
      //   opacity: 0.9
      // },
      // colors: ['#255']
    }
  },
  // theme: {
  //   mode: 'light',
  //   monochrome: {
  //     color: '#255'
  //   }
  // }
}


const Hero = () => {
  return (
    <div className='h-screen text-white px-4 max-w-6xl mx-auto'>
      <div className="flex flex-col items-center gap-4 justify-center">
      <h1 className='text-4xl tracking-widest'>ABOUT</h1>
        <div className="border-white border-2 w-16 "></div>
      </div>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdSpeed className='text-8xl bg-blue-800 p-4 rounded-[100%]'/>
            <h1 className='text-2xl'>Fast</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdLightbulbOutline className='text-8xl bg-blue-800 p-4 rounded-[100%]'/>
            <h1 className='text-2xl'>Intuitive</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdDevices className='text-8xl bg-blue-800 p-4 rounded-[100%]'/>
            <h1 className='text-2xl'>Responsive</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">My layouts will work on any device, big or small.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdRocketLaunch className='text-8xl bg-blue-800 p-4 rounded-[100%]'/>
            <h1 className='text-2xl'>Dynamics</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">Websites don&apos;t have to be static, I love making pages come to life.</p>
        </div>

       </div>
        <div className='w-full h-full lg:flex gap-8 pt-8' >
          <div className=' flex flex-col justify-center items-center flex-1 lg:mt-[-12rem]'>
            <Image src='/foodd.png' width='300' height='300' alt='' className='' />
            <h3 className='pt-4 text-gray- text-xl font-semibold'>Who&apos;s this guy?</h3>
            <p className='text-[0.75rem] lg:text-[1rem] pt-4 text-gray-600'>I&apos;m a Front-End Developer from Lagos, Nigeria.</p>
            <p className='text-[0.75rem] lg:text-[1rem] text-center text-gray-600'>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
            <p className='text-[0.75rem] lg:text-[1rem] text-blue-800'>Let&apos;s maake something special</p>
          </div>
          <div className='w-full h-full flex-1 '>
            <Chart className='w-full' options={data.options} series={data.series} type='bar' width='100%' height='70%' />
          </div>
        </div>
    </div>
  ) 
}

export default Hero