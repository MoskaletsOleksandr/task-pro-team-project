import React from 'react';
import Card from '../Card/Card';
import sprite from '../../../images/sprite.svg';
import { ScrollContainer, ScrollContent, TitleIcon, Title, ColumnContainer, WhiteIcon, Icons } from './Column.styled';

const Column = ({ title, tasks }) => {
    return (
        <ColumnContainer>
            <TitleIcon>
                <Title>{title}</Title>
                <Icons>
                    <WhiteIcon className="icon-search">
                        <use href={sprite + '#icon-pencil-01'}></use>
                    </WhiteIcon>
                    <WhiteIcon className="icon-search">
                        <use href={sprite + '#icon-trash'}></use>
                    </WhiteIcon>
                </Icons>
            </TitleIcon>

            <ScrollContainer>
                <ScrollContent>
                    {tasks.map(task => (
                        <Card key={task._id} taskId={task._id} />
                    ))}
                </ScrollContent>
            </ScrollContainer>
        </ColumnContainer>
    );
};

export default Column;