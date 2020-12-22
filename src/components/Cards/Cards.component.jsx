import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.component';
import './Cards.styles.scss';
import { modalToggle } from '../../redux/modal/modal.actions';
import Modal from '../../containers/Modal/Modal.container';
import CardViewer from '../Modals/CardViewer/CardViewer.modal';

class Cards extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const clickHandler = e => {
            let id = e.currentTarget.id;
            return this.props.modalToggle(id)
        }

        const cardsInfo = {
            netMetering: {
                title: 'Net Metering',
                subTitle: '(Lower your ELECTRICITY BILL)',
                text: 'Florida power companies are required to provide their customers maximum 1-to-1 net metering by the Florida Public Service Commission, also known as the FPSC. What does this signify? Florida Law Requires utilities to provide you with the full retail value for every unit of solar power you generate.'
            },
            taxExemptions: {
                title: 'Tax Exemptions',
                subTitle: '(You may qualify for $0 down)',
                text: 'Florida Offered two tax exemptions for solar system: A sales Taxes exemption and a property tax abatement. Under the Solar and CHP Sales Tax Exemption, Solar Energy systems are exempt from Florida’s Sales tax and use tax. The Property Tax Abatement for renewable energy property exempts the assessed value of A solar system from your Property tax.'
            },
            solarTaxCredit: {
                title: 'Solar Tax Credit',
                subTitle: '(Get a 26% FEDERAL TAX CREDIT)',
                text: 'The solar tax credit is a federal Incentive that can be applied to Solar systems. The credit allows for A 26% deduction of the costs of Installing a solar panel system from Your taxes. The tax Credit is nonrefundable, meaning you can Only get a refund up to the amount You owe in federal taxes.'
            },
            financingForSolar: {
                title: 'Financing for Solar',
                subTitle: '',
                text: 'A solar system is a significant upfront Investment. Even if you decide not to purchase your solar in cash, we suggest Four solar financing options that can help You go solar and save you money On your electric bill.'
            }
            //TODO: Import as util

        }

        return (
            <section className='Cards'>
                <section className='Cards__Container' >
                    <Card onClick={clickHandler} id='netMetering' >Net Metering</Card>
                    <Card onClick={clickHandler} id='taxExemptions' >Tax Exemptions</Card>
                    <Card onClick={clickHandler} id='solarTaxCredit' >Solar <br />Tax Credit</Card>
                    <Card onClick={clickHandler} id='financingForSolar' >Financing for Solar</Card>
                </section>
                {
                    this.props.modal === true ?
                        <Modal>
                            <CardViewer onClick={this.props.modalToggle} cards={cardsInfo} card={this.props.card} />
                        </Modal> : null
                }
            </section>
        )
        };
        
};


const mapStateToProps = ({ modal: {modalIsOpen, card} }) => ({
    modal: modalIsOpen,
    card: card
})

const mapDispathToProps = dispatch => ({
    modalToggle: (id) => dispatch(modalToggle(id))
})

export default connect( mapStateToProps, mapDispathToProps )(Cards);