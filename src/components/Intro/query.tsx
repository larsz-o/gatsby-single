import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { QueryProps } from '../../type';

const query = graphql`
    query HeaderImage {
        backgroundImage: file(relativePath: { eq: "eriks-abzinovs-V5r0SS_4QYw-unsplash.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1240, quality: 80) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

export const Query: FunctionComponent<QueryProps> = ({ children }) => {
    return <StaticQuery query={query} render={data => children(data)} />;
};
