import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const storiesDir = path.join(process.cwd(), 'stories');

const getStoriesData = (fileName) => {
	const filePath = path.join(storiesDir, fileName);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const storySlug = fileName.replace(/\.md$/, ''); //removes the file extension

	const storyData = {
		slug: storySlug,
		...data,
		content,
	};

	return storyData;
};

export const getAllStories = () => {
	const storyFiles = fs.readdirSync(storiesDir);

	const allStories = storyFiles.map((storyFile) => {
		return getStoriesData(storyFile);
	});

	const sortedStories = allStories.sort((a, b) =>
		a.date > b.date ? -1 : 1,
	);

	return sortedStories;
};

export const getFeaturedStories = () => {
	const allStories = getAllStories();

	const featuredStories = allStories.filter(
		(story) => story.isFeatured,
	);

	return featuredStories;
};

export const getStoryBySlug = (slug) => {
	let allStories = getAllStories();

	const story = allStories.find((story) => {
		return story.slug === slug;
	});

	return story;
};

export default getFeaturedStories;
