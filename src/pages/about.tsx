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
					Since the age of 11, I was extremly interested in how things worked.
					My father taught me how to program, first using blocks in Scratch,
					then using Python. At the age of 13, I taught myself C++ using the
					creator of C++, Bjarne Stroustrup's offical guide. Soon after that, I
					learned C# and became obsessed with creating websites with ASP.NET.
					Finally, I discovered Next.js, and found the incredible capabilities
					that it had to offer.
				</p>
				<p className="my-4">
					As they say, the rest is history, and today I am here and proud to
					showcase my work in this website made possible by{' '}
					<a
						target="_blank"
						className="underline underline-offset-1"
						href="https://jacobherper.com/"
					>
						Jacob Herper
					</a>
					. Thanks :{')'}
				</p>
				<p></p>

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>
				<p className="mb-6">
					I've created multiple tools and projects, and you can see them all{' '}
					<a
						target="_blank"
						className="underline underline-offset-1"
						href="/projects"
					>
						here
					</a>
					.
				</p>
				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				{
					//<Education education={education} />
				}
				<div style={{ display: 'none' }} className="flex justify-center mt-8">
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
