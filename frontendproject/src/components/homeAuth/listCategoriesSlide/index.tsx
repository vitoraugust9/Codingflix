import categoriesService from "@/src/services/categoriesService";
import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import styles from '../favoriteCategory/slideCategory.module.scss';

interface props {
    categoryId: number;
    categoryName: string;
}

const ListCategoriesSlide = function ({ categoryId, categoryName }:props){
    const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, 
        () => categoriesService.getCourses(categoryId)
    );

    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>Loading...</p>;

    const courses = data.data.courses;

    return (
        <>
            <p className={styles.titleCategory}>{categoryName}</p>
            <SlideComponent course={courses} />
        </>
    );
};

export default ListCategoriesSlide;
