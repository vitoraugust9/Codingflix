import styles from "../favoriteCategory/slideCategory.module.scss";
import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/slideComponent";

const FeaturedCategory = function () {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

  if (error) return error;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <p className={styles.titleCategory}>Em destaque</p>
      <SlideComponent course={data.data} />
    </>
  );
};
export default FeaturedCategory;
