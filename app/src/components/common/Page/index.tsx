import React, { ReactNode, SFC } from 'react'

import { PageWrapper, MainPage, PageOptionsHead, HeadPage } from './styled'

interface Props {
    options?: any;
    title: string;
    className?: string;
    children?: ReactNode;
}

export const Page: SFC<Props> = ({ className, children, title, options }) => (
    <PageWrapper className={className}>
        <HeadPage>
            <h1>{title}</h1>
            <PageOptionsHead>{options}</PageOptionsHead>
        </HeadPage>
        <MainPage>{children}</MainPage>
    </PageWrapper>
)
