#!/bin/bash

params=()

if [ ! -z "$TEST_SUITE" ] 
then params+=(test/e2e/tests/regression/*/$TEST_SUITE*)
	if [ ! -z "$TEST_CASE" ] 
    then params+=(--testcase "$TEST_CASE" )
    fi
fi
