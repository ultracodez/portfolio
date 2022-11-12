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

const AboutPage: NextPage<any> = ({ projects }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Eduardo Maroto Campos' Projects and Creations"
				description="Inventive creations"
			/>
			<Container>
				<h1 className="headline text-2xl md:text-4xl lg:text-5xl mt-8">
					Eduardo Maroto Campos' Projects
				</h1>
				<p className="my-12">
					A collection of ever-growing tools, apps and miscellaneous projects
					including a social media platform, developer collaboration community,
					and so much more.
				</p>
				<div className="flex my-4">
					{projects.map((project: any) => {
						return (
							<a
								key={project.id}
								href={project.url}
								className="relative flex-1 mx-2 rounded-xl overflow-hidden shadow-lg dark:bg-gray-800"
							>
								<img
									className="w-full"
									src={project.previewImage?.url}
									alt={project.title}
								/>
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">{project.title}</div>
									<p
										className="text-base"
										dangerouslySetInnerHTML={{
											__html: project.description,
										}}
									></p>
								</div>
								<br />

								<br />

								<br />
								<div className="absolute bottom-0 px-6 pt-4 pb-2">
									<span
										className={`inline-block ${
											project.completed
												? 'bg-green-500 text-white'
												: 'bg-orange-500 text-white'
										} rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`}
									>
										{project.completed ? 'Completed' : 'In Progress'}
									</span>
								</div>
							</a>
						);
					})}
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query ProjectsPageQuery {
				projects {
					id
					slug
					title
					description
					url
					previewImage {
						id
						url
					}
					completed
				}
			}
		`,
	});

	return {
		props: {
			projects: data.projects,
		},
	};
}

export default AboutPage;
