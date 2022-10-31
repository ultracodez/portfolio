import { client } from 'apollo-client';
import { format } from 'date-fns';
import { gql } from '@apollo/client';
import { IBlogPost } from '@types';
import Link from 'next/link';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import { useState } from 'react';

interface IProps {
	posts: IBlogPost[];
}

const BlogPage: NextPage<IProps> = ({ posts }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Software Engineering Blog by Jacob Herper"
				description="I try to make an effort to document my journey as a software developer in the form of blog posts. Here you find some of the articles I published over the years."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Blog
				</h1>
				{posts.map(({ title, slug, introText, publishedDate }) => {
					return (
						<article key={slug} className="mb-12">
							<Link href={`/blog/${slug}`}>
								<a className="group">
									<h1 className="text-2xl font-bold mb-2 relative inline-block underlined">
										{title}
									</h1>
									<p>{introText}</p>

									<em className="block mt-2">
										Published on <span>{publishedDate}</span>
									</em>
								</a>
							</Link>
						</article>
					);
				})}
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query BlogPageQuery {
				blogs(orderBy: publishedDate_DESC) {
					slug
					title
					introText
					publishedDate
				}
			}
		`,
	});

	const bloggs = data.blogs.map((blog: any) => {
		const blogg = JSON.parse(JSON.stringify(blog));
		blogg.publishedDate = format(new Date(blog.publishedDate), 'do MMMM yyyy');
		return blogg;
	});

	return {
		props: {
			posts: bloggs as IBlogPost[],
		},
	};
}

export default BlogPage;
