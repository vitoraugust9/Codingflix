// @ts-ignoreimport
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import SlideCard from '../slideCard';
import { CourseType } from '@/src/services/courseService';

interface Props {
 course: CourseType[] | undefined;
}

const SlideComponent: React.FC<Props> = ({ course }) => {
 let slideCount = 0;

 if (course && course.length > 4) {
    slideCount = 4;
 } else if (course) {
    slideCount = course.length;
 }

 return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: 'loop',
            perPage: slideCount,
            perMove: 1,
            width: slideCount * 300,
            pagination: false,
            arrows: course && course.length > 4 ? true : false,
            drag: course && course.length > 4 ? true : false,
            breakpoints: {
              1200: {
                perPage: slideCount >= 2 ? 2 : 1,
                width: slideCount >= 2 ? 640 : 300,
              },
              640: {
                perPage: 1,
                width: 300,
              },
              300: {
                width: 250,
              },
            },
          }}
        >
          {course?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
 );
};

export default SlideComponent;