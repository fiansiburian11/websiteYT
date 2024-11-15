/** @format */
import VideoItem from './VideoItem';

export default function VideoList({ videos }: { videos: any }) {
	return (
		<div className='grid grid-cols-4 gap-8'>
			{videos.items.map((video: any) => {
				return (
					<div key={video.id.videoId}>
						<VideoItem video={video} />
					</div>
				);
			})}
		</div>
	);
}
