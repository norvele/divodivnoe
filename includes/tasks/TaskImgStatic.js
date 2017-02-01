import gulp from 'gulp';
import plumber from 'gulp-plumber';

export default class TaskImgStatic
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(plumber())
				.pipe(gulp.dest(config.dest));
		});
	}
}