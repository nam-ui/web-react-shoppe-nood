import React, { Component } from 'react';

export type Product = {
    name?: string,
    id: string,
    images?: string,
    price?: number,
    salePrice?: number,
    percentageDiscount?: number,

}