import React from 'react';
import { List, ListDivider } from '@rmwc/list';
import { ElementList } from './ElementList';
import './ViewList.scss';

export class ViewList extends React.Component {
    render() {
        const sets = this.props.sets;

        return (
            <List twoLine className="view-list">
                {sets.map((set, index) => {
                    const gbLaunch = new Date(set.gbLaunch);
                    const gbEnd = new Date(set.gbEnd);
                    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    const nth = function (d) {
                        if (d > 3 && d < 21) return 'th';
                        switch (d % 10) {
                            case 1: return "st";
                            case 2: return "nd";
                            case 3: return "rd";
                            default: return "th";
                        }
                    };
                    const title = set.profile + ' ' + set.colourway;
                    const subtitle = gbLaunch.getDate() + nth(gbLaunch.getDate()) + '\xa0' + month[gbLaunch.getMonth()] + ' until ' + gbEnd.getDate() + nth(gbEnd.getDate()) + '\xa0' + month[gbEnd.getMonth()] + '.';
                    return (
                        <ElementList title={title} subtitle={subtitle} image={set.image} geekhack={set.ghThread} store={set.storeLink} admin={this.props.admin} edit={this.props.edit} key={index} />
                    )
                })}
                <ListDivider />
            </List>
        );
    }
}
export default ViewList;