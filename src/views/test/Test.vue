<template>
  <b-row>
    <b-col cols="12" lg="6">
      <b-card no-header>
        <template slot="header">
          Test Page
        </template>
        <p>TEST 123</p>
        <template slot="footer">
          <b-button @click="goBack">Back</b-button>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>