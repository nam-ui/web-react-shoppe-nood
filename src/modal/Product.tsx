import React, { Component } from 'react';

export type Product ={
    nameProduct ?: string ,
    idProduct : string ,
    imgProduct ?: string ,
    beforSale ?: number ,
    afterSale ?: number ,
    percentageDiscount  ?: number
}