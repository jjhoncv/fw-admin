import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSectionsHeader } from './../../../../view/Sections/state/header/actions'
import * as selectSectionsHeader from './../../state/header/selectors'
import { ItemList } from './../../../../Components/Dashboard/styled';
import { ModuleHeader, SectionHeader } from './../../../Sections/models/ModuleHeader'

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
            <ItemList>
                {sectionsHeader.map((module: ModuleHeader) => (
                    <li key={module.id}><a>{module.name}</a>
                        <ul>
                            {module.sections.map((section: SectionHeader) => (
                                <li key={section.id}><a href={section.url}>{section.name}</a></li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ItemList>
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