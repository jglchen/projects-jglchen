"use server";

import { cache } from 'react';
import { allProjects } from 'contentlayer/generated';

export const getTagList = cache(async () => {
    const locale = 'en';
    
    const portfolios = allProjects.filter(item => item.locale === locale);
    let tags: string[] = [];
    for (let portfolio of portfolios){
        if (portfolio.tags){
            tags = tags.concat(portfolio.tags);
        }
    }
    tags.sort();

    const tagArr = [];
    let tagStr = '';
    let countNum = 0;
    for (let tag of tags){
        if (tagStr === tag){
            countNum++;
        }else{
            if (countNum){
                tagArr.push({title: tagStr, countNum});
            }
            countNum = 1;
            tagStr = tag;
        }
    } 
    tagArr.sort(
        (a, b) => b.countNum - a.countNum
    );
    const tagList = tagArr.map(item => item.title);

    return tagList;
});    