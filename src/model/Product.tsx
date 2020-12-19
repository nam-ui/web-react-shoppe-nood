import React, { Component } from 'react';

export type Product = {
    name?: string,
    id: string,
    img?: string,
    beforeSale?: number,
    afterSale?: number,
    percentageDiscount?: number
}