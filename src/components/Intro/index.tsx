import React, { FunctionComponent } from 'react';
import animateScrollTo from 'animated-scroll-to';
import {
    Container,
    BackgroundImage,
    ImageOverlay,
    Arrow,
    Data,
    Title,
    SubTitle,
} from './style';
import { Query } from './query';
import { Copyright } from '../Copyright';

export const Intro: FunctionComponent<{}> = () => {
    const scrollWindow = () => {
        const data = document.querySelector('.intro-data');
        if (data) {
            const windowScrollTop = window.scrollY || window.pageYOffset;
            const dataRect = data.getBoundingClientRect();
            animateScrollTo(dataRect.top + dataRect.height + windowScrollTop, {
                speed: 1000,
            });
        }
    };

    const timeoutBase = 500;

    return (
        <Query>
            {data => (
                <>
                    <Container>
                        <BackgroundImage
                            sizes={data.backgroundImage.childImageSharp.fluid}
                        />
                        <ImageOverlay />
                        <Data className="intro-data">
                            <div>
                            <Title
                                effect="fade-slide-left"
                                effectTimeout={timeoutBase}
                            >
                                Hi, I'm Joe.
                            </Title>
                            <SubTitle
                                effect="fade-slide-bottom"
                                effectTimeout={timeoutBase + 500}
                            >
                               I'm an educator, editor, and scholar.
                            </SubTitle>
                            </div>
                            <img className="bio-pic" src={require('../../../static/assets/joeisolate-head.png')} alt="Joe"/>
                        </Data>
                        <Arrow
                            effectTimeout={timeoutBase + 1500}
                            onClick={() => scrollWindow()}
                        />
                    </Container>
                    <Copyright
                        author="Patrick Tomasso"
                        source="https://unsplash.com/photos/Oaqk7qqNh_c"
                        sourceText="Unsplash"
                    />
                </>
            )}
        </Query>
    );
};
