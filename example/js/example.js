/**
 * Created by santanu on 15/7/18.
 */

const $fromInput = document.getElementById('from-date');
const $toInput = document.getElementById('to-date');
const $result = document.querySelector('.result');

$fromInput.addEventListener('change', () => {
    $result.innerHTML = TimeDiff( $fromInput.value || '', $toInput.value || null );
});

$toInput.addEventListener('change', () => {
    $result.innerHTML = TimeDiff( $fromInput.value || '', $toInput.value || null );
});