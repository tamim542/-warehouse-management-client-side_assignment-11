import React from 'react';

const About = () => {
    return (
        <div style={{ minHeight: '100vh', marginTop: '30px', marginLeft:'150px', marginRight:'150px' }}>
            <div>
                <h4>Latest Laptop Storehouse Limited</h4>
                One of the largest retail chain stores for Laptops in Bangladesh. Laptops Our main product. Besides, Latest Laptop Storehouse Limited provide product-related services. We have branches in Dhaka IDB Bhaban, Dhaka Rampura, Dhaka Uttara, Dhaka Multiplan Centre, Dhaka Eastern Plus, Dhaka Bonosree, Chattogram-Agrabad, Chattogram-GEC Circle, Bogura, Rangpur, Mymensingh, Barisal, Rajshahi and Khulna.
            </div>
            <div style={{marginTop:'30px'}}>
                <table class="table table-dark table-hover">
                   
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Our Management</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Chairman: Tanveer Bhuiyan</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                           
                            <td>Managing Director: Tanjina Afruj</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            
                            <td>Director: Tamim Bhuiyan</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{marginTop:'30px'}}>
                <table class="table table-dark table-hover">
                   
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Other Concerns of Latest Laptop Storehouse Limited</td>
                           
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Latest Laptop Storehouse Archives Limited, The Pioneer digital archive house of Bangladesh, grabbing largest amount of data every moment from print and electronic media and the leading service provider for media monitoring as well.</td>
                            
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default About;