import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'places',
    loadComponent: () => import('./places/places.page').then( m => m.PlacesPage)
  },
  {
    path: 'place-detail',
    loadComponent: () => import('./place-detail/place-detail.page').then( m => m.PlaceDetailPage)
  },
  {
    path: 'offers',
    loadComponent: () => import('./offers/offers.page').then( m => m.OffersPage)
  },
  {
    path: 'offer-details',
    loadComponent: () => import('./offer-details/offer-details.page').then( m => m.OfferDetailsPage)
  },
  {
    path: 'booking',
    loadComponent: () => import('./booking/booking.page').then( m => m.BookingPage)
  },
  {
    path: 'offer-bookings',
    loadComponent: () => import('./offer-bookings/offer-bookings.page').then( m => m.OfferBookingsPage)
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new.page').then( m => m.NewPage)
  },
  {
    path: 'new-offers',
    loadComponent: () => import('./new-offers/new-offers.page').then( m => m.NewOffersPage)
  },
];
