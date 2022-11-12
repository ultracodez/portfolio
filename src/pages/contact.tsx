import { IEducation, IJob, IPodcast } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mapEducation } from 'Utils/mappings/mapEducation';
import { mapJobs } from 'Utils/mappings/mapJobs';
import { mapPodcasts } from 'Utils/mappings/mapPodcasts';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';
import { PodcastList } from 'Molecules/PodcastList';
import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	podcasts: IPodcast[];
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = () => {
	return (
		<AnimatePage>
			<SeoHead
				title="Contact Eduardo Maroto Campos, a Senior Fullstack Software Engineer and Consultant in the USA"
				description="I'm open to talk about hiring or doing a collaboration. Ready to talk? Ping me @ultracodez#9999"
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Contact Me
				</h1>
				<p className="mt-8">
					Want to do a collaboration or find out if I'm available for something?
					Send me an email at{' '}
					<a
						target="_blank"
						className="underline underline-offset-1"
						href="mailto:ultracodez@outlook.com"
					>
						ultracodez@outlook.com
					</a>{' '}
					or send me a DM on discord at ultracodez#9999.
				</p>
				<p className="my-4"></p>
				<p></p>
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;
