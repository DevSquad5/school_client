import React from 'react';
import teacher from '../../assets/images/teacher.png'

export const HomeTeacher = () => {
  return (
    <div className='max-w-screen-sm mx-auto section-padding'>
        <div className='bg-[#D9D9D9] p-4'>
            <h2 className='border-b-2 border-[#6B6B6B] table py-2 px-6 mx-auto text-black text-3xl font-semibold leading-7'> 
                Head Teacher  
            </h2>

            <div className="border border-2 border-[#6B6B6B] p-1 mx-auto table mt-4">
                <div className="bg-[#6B6B6B]">
                    <img src={teacher} alt="img" />
                    <div className="p-2 text-white">
                        <p><strong className="text-[#222f3e]">Name:</strong> Md. Jhon Dev</p>
                        <p><strong className="text-[#222f3e]">Title:</strong> Head Teacher</p>
                    </div>
                </div>
            </div>

            <p className='max-w-[400px] mx-auto p-2 text-black text-justify text-base font-normal leading-5'> 
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum .
            </p>
            



        </div>
    </div>
  )
}
