import React from 'react'
import '../../Styles/Contact.scss'
import GoogleMap from '../../Components/GoogleMap'

const Contact = () =>  {

    return (
        <div className='contact-page content'>
            <h2>Contact Us</h2>
            <div className='form'>
                <form id="contact-form" className='card' method="post" 
                enctype="text/plain"
                action="mailto:someone@example.com">
                    <div class="messages"></div>
                    <div class="controls">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_name">Firstname *</label>
                                    <input id="form_name" type="text" name="name" 
                                    class="form-control" 
                                    placeholder="Please enter your firstname *" 
                                    required="required" 
                                    data-error="Firstname is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_lastname">Lastname *</label>
                                    <input id="form_lastname" type="text" 
                                    name="surname" class="form-control" 
                                    placeholder="Please enter your lastname *"
                                    required="required" 
                                    data-error="Lastname is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_email">Email *</label>
                                    <input id="form_email" type="email" 
                                    name="mail" class="form-control" 
                                    placeholder="Please enter your email *" 
                                    required="required" 
                                    data-error="Valid email is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_need">Please specify your need *</label>
                                    <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                        <option value=""></option>
                                        <option value="Request quotation">Service</option>
                                        <option value="Request order status">Upgrade</option>
                                        <option value="Request copy of an invoice">Oil Change</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form_message">Message *</label>
                                    <textarea id="form_message" name="message" class="form-control" placeholder="Message*" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" 
                                class="btn btn-success btn-send" 
                                value="Send message"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <GoogleMap width='100%'/>

        </div>
        )
}

export default Contact;
