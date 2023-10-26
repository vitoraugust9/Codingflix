import { useRouter } from "next/router";
import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/src/components/common/headerGeneric";
import { useEffect, useRef, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import PageSpinner from "@/src/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import Footer from "@/src/components/common/footer";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import watchEpisodeService from "@/src/services/episodesService";

const EpisodePlayer = function () {
    const router = useRouter();
    const episodeOrder = parseFloat(router.query.id?.toString() || "");
    const episodeId = parseFloat(router.query.episodeid?.toString() || "");

    const courseId = router.query.courseid?.toString() || "";
    const [course, setCourse] = useState<CourseType>();

    const [getEpisodeTime, setGetEpisodeTime] = useState(0);
    const [episodeTime, setEpisodeTime] = useState(0);
    const [isReady, setIsReady] = useState(false);


    const playerRef = useRef<ReactPlayer>(null);


    const handleGetEpisodeTime = async () => {
        const res = await watchEpisodeService.getWatchTime(episodeId);
        if (res.data !== null) {
            setGetEpisodeTime(res.data.seconds);
        }
    };



    const handleSetEpisodeTime = async () => {
        await watchEpisodeService.setWatchTime({
            episodeId: episodeId,
            seconds: Math.round(episodeTime),
        });
    };

    useEffect(() => {
        handleGetEpisodeTime();
    }, [router]);

    const handlePlayerTime = () => {
        playerRef.current?.seekTo(getEpisodeTime);
        setIsReady(true);
    };

    if (isReady === true) {
        setTimeout(() => {
            handleSetEpisodeTime();
        }, 1000 * 3);
    }



    const getCourse = async function () {
        if (typeof courseId !== "string") return;

        const res = await courseService.getEpisodes(courseId);
        if (res.status === 200) {
            setCourse(res.data);
        }
    };

    
    const handleLastEpisode = () => {
        router.push(`/courses/episode/${episodeOrder - 1}?courseid=${course?.id}&episodeid=${episodeId - 1}`);
    };

    const handleNextEpisode = () => {
        router.push(`/courses/episode/${episodeOrder + 1}?courseid=${course?.id}&episodeid=${episodeId + 1}`);
    };

    useEffect(() => {
        getCourse();
    }, [courseId]);


    if (course?.episodes == undefined) return <PageSpinner />;

    if (episodeOrder + 1 < course.episodes.length) {
        if (Math.round(episodeTime) === course.episodes[episodeOrder].secondsLong) {
            handleNextEpisode();
        }
    }


    return (
        <>
            <Head>
                <title>Onebitflix - {course.episodes[episodeOrder].name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <div className={styles.header}>
                    <HeaderGeneric logoUrl="/home" btnContent={`Voltar para o curso`} btnUrl={`/courses/${courseId}`} />
                </div>
                <section className={styles.mainContent}>
                    <Container className="d-flex flex-column gap-3 pt-3">
                        {typeof window == "undefined" ? null : (
                            <ReactPlayer
                                className={styles.player}
                                url={`${process.env.NEXT_PUBLIC_BASEURL
                                    }/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl
                                    }&token=${sessionStorage.getItem("onebitflix-token")}`}
                                controls
                                width={"100%"}
                                height={"100%"}
                                ref={playerRef}
                                onStart={handlePlayerTime}
                                onProgress={(progress) => {
                                    setEpisodeTime(progress.playedSeconds);
                                }}
                            />
                        )}

                        <p className={styles.episodeTitle}>
                            {course.episodes[episodeOrder].name}
                        </p>
                        <div className={styles.complementText}>
                            <p className={styles.textInitalComplement}>Texto complementar</p>
                            <p className="mt-4 pb-2 text-light">
                                {course.episodes[episodeOrder].synopsis}
                            </p>
                        </div>


                        <div className={styles.episodeButtonDiv}>
                            <Button
                                className={styles.episodeButton}
                                disabled={episodeOrder === 0 ? true : false}
                                onClick={handleLastEpisode}
                            >
                                <IoArrowBackOutline className={styles.arrowImg} />
                            </Button>
                            <Button
                                className={styles.episodeButton}
                                disabled={episodeOrder + 1 === course.episodes.length ? true : false}
                                onClick={handleNextEpisode}>
                                <IoArrowForwardOutline
                                    className={styles.arrowImg} />
                            </Button>
                        </div>

                    </Container>
                </section>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main >
        </>
    );
};

export default EpisodePlayer;