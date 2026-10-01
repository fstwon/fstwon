import assert from 'node:assert/strict';
import test from 'node:test';
import { ROUTE_LOADING_DELAY_MS } from '../src/shared/ui/RouteLoadingFallback/routeLoading.ts';

test('delays route loading indicator to avoid flashing on fast chunk loads', () => {
	assert.equal(ROUTE_LOADING_DELAY_MS, 200);
});
