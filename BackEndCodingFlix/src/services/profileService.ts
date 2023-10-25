import { User } from "../models"
import { filterLastEpisodesByCourse } from "./userService" 

getKeepWatchingList: async (id: number) => {
    const userWithWatchingEpisodes = await User.findByPk(id, {
      include: {
        association: 'Episodes',
        attributes: [
          'id',
          'name',
          'synopsis',
          'order',
          ['video_url', 'videoUrl'],
          ['seconds_long', 'secondsLong'],
          ['course_id', 'courseId']
        ],
        include: [{
          association: 'Course',
          attributes: [
            'id',
            'name',
            'synopsis',
            ['thumbnail_url', 'thumbnailUrl']
          ],
          as: 'course'
        }],
        through: {
          as: 'watchTime',
          attributes: [
            'seconds',
            ['updated_at', 'updatedAt']
          ]
        }
      }
    })

    if (!userWithWatchingEpisodes) throw new Error('Usuário não encontrado.')

    const keepWatchingList = filterLastEpisodesByCourse(userWithWatchingEpisodes.Episodes!)
    // @ts-ignore
    keepWatchingList.sort((a, b) => a.watchTime.updatedAt < b.watchTime.updatedAt ? 1 : -1)
    return keepWatchingList
  }
