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
				title="About Eduardo Maroto Campos, a Senior Fullstack Software Engineer and Consultant in the USA"
				description="As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Eduardo Maroto Campos
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Senior Fullstack Software Engineer from the U.S.A.
				</h2>
				<p className="mt-8">
					As a passionate front-end developer, I create amazing websites and web
					apps to make the internet a better place. I am an advocate for web
					performance and accessibility as well as a JAMstack enthusiast with
					experience in serverless technologies.
				</p>
				<p className="my-4">
					I am 31 years old and have been a web developer for as long as I can
					think. The technologies I work with are JavaScript, HTML and CSS with
					a focus on the frameworks React.js, Gatsby, Next.js, Node and Express.
					I use code not only to do my day-to-day job, but also to solve
					everyday problems I come across.
				</p>
				<p>
					When I am not writing code I love to spend time with my wife and 3
					year old daughter at home in London or travelling around the world. We
					are quite a multi-cultural family with me having grown up in Germany
					🇩🇪 and my wife being from Mexico 🇲🇽, which is why we raise our
					daughter trilingual. I myself speak five languages (some better than
					others). Furthermore I enjoy cooking fresh food when I come home after
					a long day at the office.
				</p>

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				{
					//<Education education={education} />
				}
				<div className="flex justify-center mt-8">
					<Button
						href="/cv-2022.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;
