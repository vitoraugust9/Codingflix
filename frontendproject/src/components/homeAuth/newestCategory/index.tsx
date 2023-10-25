import courseService from "@/src/services/courseService";
import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import styles from "../favoriteCategory/slideCategory.module.scss"

const NewestCategory = function (){
    const { data, error } = useSWR("/newest", courseService.getNewestCourses);

  if (error) return error;
  if (!data) 
  return (
  <>
    <p>
        Loading...
    </p>
  
  </>);

  return <>
    <p className={styles.titleCategory}>Lançamentos</p>
    <SlideComponent course={data.data} />
  </>;
};


export default NewestCategory;
