/*
	lostclock.js, version 0.1
	Copyright 2014, Daniel Evora
	License: http://www.opensource.org/licenses/mit-license.php
*/

FlipClock.LostClockFace = FlipClock.Face.extend({
	
	/**
	 * Build the clock face	
	 */

	build: function() {
		this.base(true, this.factory.time.getMinuteCounter());
	},
	
	reset: function() {
		this.log('This method is triggered when the clock is reset');
	},
	
	stop: function() {
		// make it spin!!!
		this.log('This method is triggered when the clock is stopped');
	},

	/**
	 * Increment the clock face
	 */
	
	increment: function() {
		//always count down!
		this.factory.time.subSecond();
	},

	/**
	 * Flip the clock face
	 */
	 
	flip: function() {
		if(!time) {
			time = this.factory.time.getMinuteCounter();
		}
		this.base(time, doNotAddPlayClass);
	}
	
});