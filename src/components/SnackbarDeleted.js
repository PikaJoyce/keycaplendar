import React from 'react';
import { Snackbar, SnackbarAction } from '@rmwc/snackbar';
import firebase from "./firebase";

export class SnackbarDeleted extends React.Component {
    recreateEntry = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection('keysets').add({
            profile: this.props.set.profile,
            colorway: this.props.set.colorway,
            designer: this.props.set.designer,
            icDate: this.props.set.icDate,
            details: this.props.set.details,
            image: this.props.set.image,
            gbLaunch: this.props.set.gbLaunch,
            gbEnd: this.props.set.gbEnd,
            vendors: this.props.set.vendors
        })
            .then(function (docRef) {
                console.log("Document recreated with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        this.props.getData();
        this.props.close();
    };
    render() {
        return (
            <Snackbar open={this.props.open} message={this.props.set.profile + ' ' + this.props.set.colorway + ' has been deleted.'} onClose={this.props.close} action={
                <SnackbarAction label="Undo" onClick={this.recreateEntry} />
            }/>
        );
    }
}

export default SnackbarDeleted;