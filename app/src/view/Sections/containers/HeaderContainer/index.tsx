import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSectionsHeader } from './../../../../view/Sections/state/header/actions'
import * as selectSectionsHeader from './../../state/header/selectors'
import { ModuleHeader } from './../../../Sections/models/ModuleHeader'

import { TopBar } from './../../components/TopBar';
import { WrapperTopBar } from './../../components/TopBar/styled'

interface Props {
    fetchSectionsHeader: Function;
    sectionsHeader: ModuleHeader[]
}



class Container extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { fetchSectionsHeader } = this.props;
        fetchSectionsHeader();
    }
    render(): JSX.Element {
        const { sectionsHeader } = this.props;
        return (
            <WrapperTopBar>
                <TopBar data={sectionsHeader} />
            </WrapperTopBar>
        )
    }
}

const mapStateToProps = state => ({
    sectionsHeader: selectSectionsHeader.getSectionsHeader(state)
});

const mapDispatchToProps = dispatch => ({
    fetchSectionsHeader: () => dispatch(fetchSectionsHeader())
});

export const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);